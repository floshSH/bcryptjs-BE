import mongoose from 'mongoose';


const UrlSchema=mongoose.Schema({
   
    longUrl:String,
    shortUrl:String
    
},{versionKey:false})

const url=mongoose.model("url",UrlSchema);
export default url;