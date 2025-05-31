const mongoose = require('mongoose');

const {Schema} = mongoose;

const MessageSchema = new Schema({
  email:{
    type: String,
    required: true
  },
  name:{
    type:String,
    required: true
  },
  phoneNumber:{
    type:String,
    required: true
  },
 message:{
    type:String,
    required: true
  },
  complete:{
    type: Boolean,
    default: false
  },
 });
 
 module.exports = mongoose.model('messages', MessageSchema);