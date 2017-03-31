var express = require('express');
var massive = require('massive');
// var controller = require('./js/activityCtrl.js')

var app = express();
var port = 8080;
app.get('/', function (req, res) {
  console.log(__dirname)
  res.sendFile(__dirname + '/index.html')
})
// app.use(express.static(__dirname + '/index.html'));

app.listen(port, function(){
  console.log("Successfully listening on :", port)
})


var connectionString = "postgres://erinvaage@localhost/";
var massiveInstance = massive.connectSync({ connectionString : connectionString})

app.set('db', massiveInstance);


var db = app.get('db');

app.get('/activities', function(req, res) {
  db.get_activities(function(err, activities){
    res.status(200).send(activities)
  });
});

app.get('/events', function(req, res) {
  db.get_events(function(err, events){
    console.log(events)
    res.send(events)
  });
});

app.post('/events', function(req, res) {
  var event = req.body.event;
  var paramsArr = [
    event.userId || 1,
    event.name,
    event.city,
    event.state,
    event.zipcode,
    event.startDate,
    event.endDate,
    event.startTime,
    event.endTime,
    event.experienceLevel,
    event.gender,
    event.maxNumPeople,
    event.price
  ];
  db.create_event(paramsArr, function(err, res) {
    var eventId = res;
    var activityTypesCount = req.body.event.activity_types.length;
    var count = 0;
    event.activityTypes.forEach(function (activityType) {
      db.create_event_activity_type([eventId, activityType], function (err, res) {
        count++;
        if (count === activityTypesCount) {
          res.status(200).send('ok')
        }
      });
    });
  });
});
//
// controller.Update(db);
