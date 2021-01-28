const express = require('express')

const cseapiRoute=express();

const cse1apiRoute=require('./cse1api');

const cse2apiRoute=require('./cse2api');

cseapiRoute.use('/student',cse1apiRoute);
cseapiRoute.use('/student',cse2apiRoute);

module.exports=cseapiRoute;