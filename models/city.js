var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var CitySchema = new Schema({
    name      : String
  , description  : String
  , tiles : [{ title: String, description: String }]
});


module.exports = mongoose.model('CityModel', CitySchema)