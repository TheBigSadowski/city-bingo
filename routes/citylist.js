var mongoose = require('mongoose')
  , city = require('../models/city.js');



module.exports = CityList;


function CityList(connection) {
  mongoose.connect(connection);
}



CityList.prototype = {
  showCities: function(req, res) {
    task.find({}, function foundTasks(err, items) {
      res.render('index',{title: 'City Bingo', cities: items})
    });
  },


  addCity: function(req,res) {
    var item = req.body.item;
    city = new task();
    city.name = item.name;
    city.description = item.description;
    city.save(function savedTask(err){
      if(err) {
        throw err;
      }
    });
    res.redirect('/');
  }
}