var express = require('express');
var router = express.Router();
//require mysql2
const mysql = require('mysql2');
//require models
const models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//add a get() route for specific actor
router.get('/specificActor', function(req, res, next) {
  models.actor.findOne({
	where: {
		Actor_id: 5
	   }
	})
.then(actor => {
    res.render('specificActor', {
      actor: actor
    });
  });
})

//add a get() route for actor/:id and pull in :id by setting wit to a variable with req.params.id
router.get('/actor/:id', function(req, res, next) {
  let actorId = parseInt(req.params.id);
  models.actor
    .findOne({
      where: {
        actor_id: actorId
      }
    })
    .then(actor => {
      res.render('specificActor', {
        actor: actor
      });
    });
});

module.exports = router;
