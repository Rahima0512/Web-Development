const express= require("express");
const app=express();
app.get("/",function(req,res)
{
    res.send("<h1>Hiii EveryOne </h1>")
});
app.get("/contact",function(req,res)
{
    res.send("<h1>Contact me on 74647382</h1>")
});
app.get("/about",function(req,res)
{
    res.send("<h1>Owner of the server is Al Rahima Lari</h1>")
});
app.get("/hobbies",function(req,res)
{
    res.send("<h1>I love pubg</h1>")
});
app.listen(3000,function()
{
    console.log("Server runnning");
});