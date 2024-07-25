const mongoose=require('mongoose');
const movieSchema=mongoose.Schema({
    movieName:String,
    category:String,
    movieDirector:String,
    releaseYear:String
})
const MovieData=mongoose.model('movie',movieSchema);
module.exports=MovieData