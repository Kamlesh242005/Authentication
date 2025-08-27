const mongoose=require('mongoose');

const mongo_url=process.env.MongoDB_URI;

mongoose.connect(mongo_url)
    .then(()=>{
        console.log('Mongodb connected....');
    }).catch((err)=>{
        console.log('Mongodb connection error:',err);
    });
