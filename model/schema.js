const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    "name":{type:String},
    "email":{type:String},
    "rollno":{type:Number}
},{
    collection:"students"
})

module.exports = mongoose.model("studentSchema",studentSchema);