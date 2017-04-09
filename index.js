var express = require('express');
var massive = require('massive');
var bodyParser = require('body-parser');


var app = express();
var port = 8080;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
  console.log("Successfully listening on :", port)
})


var connectionString = "postgres://erinvaage@localhost/";
var massiveInstance = massive.connectSync({ connectionString : connectionString})

app.set('db', massiveInstance);


var db = app.get('db');

app.get('/api/activities', function(req, res) {
  db.get_activities(function(err, activities){
    res.status(200).send(activities)
  });
});

app.get('/api/events/:id', function(req, res) {
  console.log("this is req.params", req.params)
  db.get_event([req.params.id], function(err, event){
    console.log('this is event', event)

    if (event.length) {
      var event = event[0];
      db.get_event_activities([event.id], function (err, activityTypes) {
        event.activityTypes = activityTypes;
        res.status(200).send(event);
      });
    } else {
      res.send();
    }
  });
});

// How do you get city with space
// app.get('/api/events/:city', function(req, res) {
//   console.log("this is req.params", req.params)
//   db.get_events([req.params.city], function(err, events){
//     console.log('this is event', events)
//
//     if (events.length) {
//       var events = events[0];
//       db.get_event_activities([events.id], function (err, activityTypes) {
//         events.activityTypes = activityTypes;
//         res.status(200).send(events);
//       });
//     } else {
//       res.send();
//     }
//   });
// });


app.get('/api/events', function(req, res) {
  db.get_events(function(err, events){
    var count = 0;
    var limit = events.length;
    events.forEach(function (event) {
      db.get_event_activities([event.id], function (err, activityTypes) {
        event.activityTypes = activityTypes;
        count++;
        if (count === limit) res.status(200).send(events);
      });
    });
  });
});

app.get('/api/users', function(req, res) {
  db.get_users(function(err, users){
    console.log('12334545689', users)
    var count = 0;
    var limit = users.length;
    users.forEach(function (user) {
      db.get_user_activities([user.id], function (err, activityTypes) {
        user.activityTypes = activityTypes;
        count++;
        if (count === limit) res.status(200).send(users);
      });
    });
  });
});

app.get('/api/users/:id', function(req, res) {
  db.get_user([req.params.id], function(err, user){
    console.log('this is user', user)

    if (user.length) {
      var user = user[0];
      db.get_user_activities([user.id], function (err, activityTypes) {
        user.activityTypes = activityTypes;
        res.status(200).send(user);
      });
    } else {
      res.send();
    }
  });
});


app.post('/api/events', function(req, res) {
  console.log('req body', req.body)
  var event = req.body;
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
    event.price,
    event.description
  ];
  db.create_event(paramsArr, function(err, resp) {
    var eventId = resp[0].id;
    var activityTypesCount = event.activityTypes.length;
    var count = 0;
    event.activityTypes.forEach(function (activityType) {
      console.log(987654321, eventId, activityType);
      db.create_event_activity_type([eventId, activityType], function (err, response) {
        count++;
        console.log(123456789, err, response);
        if (err) {
          res.err(404);
        } else {
          if (count === activityTypesCount) {
            res.send('ok')
          }
        }
      });
    });
  });
});

app.post('/api/users', function(req, res) {
  var user = req.body;
  console.log('user1234345354', user)
  var paramsArr = [
    user.email,
    user.password,
    user.firstName,
    user.lastName,
    user.age,
    user.city,
    user.state,
    user.zipcode,
    user.bio,
    user.imageUrl
  ];
  db.create_user(paramsArr, function(err, resp) {
    console.log('resp1243q43', err, resp)
    var userId = resp[0].id;
    console.log('2345203p4523o45u', userId);
    console.log("activity21298347102934", user.activityTypes);
    var activityTypesCount = user.activityTypes.length;
    var count = 0;
    user.activityTypes.forEach(function (activityType) {
      console.log(987654321, userId, activityType);
      db.create_user_activities([userId, activityType], function (err, response) {
        count++;
        if (count === activityTypesCount) {
          res.status(200).send('ok')
        }
      });
    });
  });
});
