const express = require('express');

const it2apiRoute=express.Router();

it2apiRoute.get('/it/b/:username',(req,res)=>
{
    
    let url_urlParts = require('url').parse(req.url, true);
    res.send(`the user is of ${url_urlParts.pathname} and name is ${req.params.username}`);
} )

module.exports=it2apiRoute;