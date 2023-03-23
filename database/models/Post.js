const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title:String, 
    description: String,
    content: String
}); 

const post = mongoose.model('Post',PostSchema)
module.exports= post