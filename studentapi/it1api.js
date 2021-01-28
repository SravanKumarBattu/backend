const express = require('express');

const it1apiRoute=express.Router();

it1apiRoute.get('/it/a/:username',(req,res)=>
{ 
    res.send(`the user is of ${req.url} and name is ${req.params.username}`);
} )

module.exports=it1apiRoute;