const mongoose = require("./connect");
var PERSONASCHEMA = {
  nombre:String,
	ci:String,
	edad:Number,
	fechaRegistro:Date,
  //esito seria
}

const PERSONA = mongoose.model("persona", PERSONASCHEMA);
module.exports = {model: PERSONA, schema:PERSONASCHEMA};
