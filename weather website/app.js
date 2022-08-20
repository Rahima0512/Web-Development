const express= require("express")
const https=require("https");
const http=require("http");
const app= express();
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){

    res.sendFile(__dirname +"/index.html");
});

app.post("/",function(req,res){

    const cityName=req.body.city;
    const apikey="96866805dc4baddec2c903276d099586";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apikey+"&units=metric";
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
            const weatherData=JSON.parse(data)
            const temp=weatherData.main.temp;
            const desc=weatherData.weather[0].description;
            const icon=weatherData.weather[0].icon;
            const iconurl="http://openweathermap.org/img/wn/"+icon+"@2x.png";
            res.write("<h1> The temperature in " + cityName + " is:  "+temp+" degree Celcius </h1>");
            res.write("<p>Description: "+desc+"</p>");
            res.write("<img src="+iconurl+">");
            res.send();
        })
    });

});

app.listen(3000,function()
{
    console.log("Server is running on port 3000");
});

