const express = require('express');

const cse2apiRoute=express.Router();

cse2apiRoute.get('/cse/b/:username',(req,res)=>
{ 
    res.send(`the user is of ${req.url} and name is ${req.params.username}`);
} )

module.exports=cse2apiRoute;