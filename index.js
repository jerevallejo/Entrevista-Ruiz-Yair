const mongoose = require('mongoose');
const app = require('./app');
const port = 3700;


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/entrevista-tarjetas')
.then(() =>{
    console.log("DataBase Connection Success");
    //creacion del servidor
    app.listen(port, () => {
        console.log("Server started at localhost:3700")
    })
} )
.catch( err => console.log(err));



