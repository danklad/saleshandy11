
// I AM NOT IGNORING MY DATABASE PATH AND NODE MODULES JUST FOR YOUR REFERENCE. I KNOW THAT ITS NOT SECURE BUT SINCE THIS IS A TEST, I DIDNT ADD THEM TO MY GIT IGNORE FOLDER.
// please host this on your local pc from the port 3000. I didnt want to purchare a domain or add a weird long free domain :)

const express = require('express');
const router = express.Router()
const vaccineDataModel = require('../models/data.js')


//Getting all the data for reference   -- this json data is hardcoded in my mongodb atlas

router.get('/all',async(req,res)=>{
    try {
        const vaccine = await vaccineDataModel.find()
        var len = vaccine.length;
        res.send({vaccineData:vaccine,num_of_items:len})    
    } catch(err){
        res.status(500).json({message:err.message})
    }
    })


// Find elements based on their vaccination status 

router.get('/vaccinatedStatus',async(req,res)=>{
    try {
        const vaccine = await vaccineDataModel.find({vaccination:true})
        
        var len = vaccine.length;
        res.send({vaccineData:vaccine,num_of_items:len})
    } catch(err){
        res.status(500).json({message:err.message})
    }
    })

// find elements based on their ip address 

router.get('/ip/:id',async(req,res)=>{
    try {
        const vaccine = await vaccineDataModel.find({ip:req.params.id})
        var len = vaccine.length;
        res.send({vaccineData:vaccine,num_of_items:len})
    } catch(err){
        res.status(500).json({message:err.message})
    }
    })


    // path to get data based on the state of the person 

    router.get('/state/:id',async(req,res)=>{
        try {
            const vaccine = await vaccineDataModel.find({state:req.params.id})
            var len = vaccine.length;
            res.send({vaccineData:vaccine,num_of_items:len})
        } catch(err){
            res.status(500).json({message:err.message})
        }
        })



//main route

router.get('/vaccineData',(req,res)=>{
    res.send('Hello Team SalesHandy! I have made the api as per your request. If you think i missed something, please do let me know so that i can add those things. Please refer to my email to know all the custom paths of this API so that you can access the json response. Thank you!! This is Sai Surya Teja Nune!, email: nunesaisuryateja@gmail.com, mobile:8309004822');
})



router.post('/',(req,res)=>{
        /// I COULD HAVE MADE A FRONT END TO ADD OUR OWN CUSTOM DATA BUT YOU GUYS ASKED ME TO HARDCODE THE DATA IN MY DATABASE.
})





module.exports = router 