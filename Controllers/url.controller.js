
import shortid from 'shortid';
import url from '../Models/Url.schema.js';

export const shortUrl= async(req, res)=>{
   try {
    const {longurl}= req.body;
    const shortUrl= shortid(longurl);
     const newUrl= new url({
        longUrl:longurl,
        shortUrl
        
    }); 
    await newUrl.save();
    //console.log(newUrl);
    return res.status(201).json({message:"shorted", shortUrl:shortUrl});
   } catch (error) {
    console.log(error);
   }

}

export const deployUrl=async(req, res)=>{
    //console.log(req.body);
    try {
        const {shortUrl}= req.body;
        console.log(shortUrl);
        const deployData= await url.findOne({shortUrl});
        console.log(deployData);
        if(deployData){
            console.log(deployData.longUrl);
            return res.json({message:"deploy",url:deployData.longUrl});
        }
        else{
            return res.status(404).json({message:"not found"});
        }
    } catch (error) {
        console.log(error);
    }
}