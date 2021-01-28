const express = require('express');

const app= express();

const port=8000;


const cseapiRoute=require('./studentapi/cseapi')
const itapiRoute=require('./studentapi/itapi')

app.use("/user",cseapiRoute)
app.use("/user",itapiRoute)






app.listen(port, ()=>
{
    console.log(`server is running on ${port}`);
});
