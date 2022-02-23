const express=require('express');
const app=express.Router();
//----------------------------------------------------

app.get('/Historia',(req,res)=>{
    res.render('acerca');
});
app.get('/seguimiento',(req,res)=>{
    res.render('seguimiento');
});
app.get('/personalizado',(req,res)=>{
    res.render('contactanos')
})
//----------------------------------------------------
module.exports=app;