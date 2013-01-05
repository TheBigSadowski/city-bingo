var mongoose = require('mongoose')
  , city = require('../models/city.js');



module.exports = CityList;


function CityList(connection) {
  mongoose.connect(connection);
}



CityList.prototype = {
  showCities: function(req, res) {
    city.find({name: /./}, function foundTasks(err, items) {
	  if (err) {
		console.log(err);
	  }
      res.render('index',{title: 'City Bingo', cities: items})
    });
  },


  addCity: function(req,res) {
    var item = req.body.item;
    newCity = new task();
    newCity.name = item.name;
    newCity.description = item.description;
    newCity.save(function savedTask(err){
      if(err) {
        throw err;
      }
    });
    res.redirect('/');
  }
}