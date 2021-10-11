const express = require("express")
const app = express()
const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://surya:leavemealone@codebrigade.ovye0.mongodb.net/CodeBrigade?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology: true })
const db= mongoose.connection
db.on('error',(error)=>console.log(error))
db.once('open',()=>console.log('connected to database'))


app.use(express.json())

const vaccineRouter = require("./routes/vaccineData")

app.use('/',vaccineRouter)


app.use((req, res) => {
    res.send( {
        titleExtension: "404",
        messageFromSurya: "You are not in my specified paths. Please refer to my job email in order to tap into the specified custom paths. Thank you "
    });
})



app.listen(3000,function(){
    console.log('server started')
});