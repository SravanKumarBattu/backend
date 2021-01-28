const express = require('express');

const cse1apiRoute=express.Router();

cse1apiRoute.get('/cse/a/:username',(req,res)=>
{
    res.send(`the user is accessing from ${req.url} and name of the student is ${req.params.username}`);
} )

module.exports=cse1apiRoute;