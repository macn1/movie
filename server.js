const app = require('./app')

const Movie = require('./Model/movieModel')
const mongoose = require('mongoose')
 
const port =3000


app.listen(port,()=>{
    console.log(`server running on ${port}`);
})

mongoose.connect('mongodb+srv://athulmk:athulmk@cluster0.lsgsqfu.mongodb.net/movie?retryWrites=true&w=majority').then(()=>{
    console.log("db connected successfully");
}).catch(()=>{
    console.log("db connection failed");
})



