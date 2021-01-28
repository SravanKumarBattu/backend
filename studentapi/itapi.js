const express = require('express')

const itapiRoute=express();

const it1apiRoute=require('./it1api');

const it2apiRoute=require('./it2api');

itapiRoute.use('/student',it1apiRoute);
itapiRoute.use('/student',it2apiRoute);

module.exports=itapiRoute;