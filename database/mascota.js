const mongoose = require("./connect");
var MASCOTASCHEMA = {
  nombre:String,
	descripcion:String,
	tipo:String
  //eso nomas pude
}

const MASCOTA = mongoose.model("mascota", MASCOTASCHEMA);
module.exports = {model: MASCOTA, schema:MASCOTASCHEMA};
