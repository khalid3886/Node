const express= require('express');
const app=express();

app.use(express.text());   // express.json() for an objects

app.get('/',(req,res)=>{
    res.send('this is home page');
})


app.post('/addusers',(req,res)=>{
    console.log(req.body);
    res.send('user has been added');
})
app.listen(4500,()=>{
    console.log('server is running at port 4500');
})