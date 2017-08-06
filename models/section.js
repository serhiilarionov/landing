'use strict';

var Section = function(){
  var mongoose = require('mongoose-promised'),
    Schema = mongoose.Schema;

  //scheme of Sections model
  var SectionScheme = new Schema({
    "section" : {type: String},
    "language" : {type: String},
    "position" : {type: Number},
    "template" : {type: String}
  });

  //the model uses the schema declaration
  var _model = mongoose.model('Section', SectionScheme, "Section");

  return {
    schema : SectionScheme,
    model : _model
  }
}();
module.exports = Section;