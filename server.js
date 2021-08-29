const express = require("express");
const db= require('./db');
const userRoutes = require('./routes/userRoute')
const path = require('path')

const app = express();
app.use(express.json());


app.use('/api/users',userRoutes);


if(process.env.NODE_ENV === 'production'){
    app.use('/',express.static('client/build'))

    app.get('*' , (req,res) => {

        res.sendFile(path.resolve(__dirname , 'client/build/index.html'))
    })
}

app.get('/',(req,res)=> {
    res.send("Server Working 🔥");
});

const port = process.env.PORT || 1000;
app.listen(port,()=>{ console.log(`Server running on port 🔥 : ${port}`)});