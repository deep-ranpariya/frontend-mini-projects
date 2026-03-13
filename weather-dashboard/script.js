const apiKey="71e461f7ea743e89b1e6cdb65e5a8c3f";

async function getWeather(){

let city=document.getElementById("city").value;

let url=`https://api.openweathermap.org/data/2.5/weather?q=${city},IN&units=metric&appid=${apiKey}`;

let res=await fetch(url);

let data=await res.json();

document.getElementById("temp").innerText=data.main.temp+"°C";
document.getElementById("desc").innerText=data.weather[0].description;
document.getElementById("location").innerText=data.name;

document.getElementById("wind").innerText=data.wind.speed+" km/h";
document.getElementById("humidity").innerText=data.main.humidity+"%";
document.getElementById("pressure").innerText=data.main.pressure+" hPa";
document.getElementById("visibility").innerText=data.visibility/1000+" km";

let icon=data.weather[0].icon;

document.getElementById("icon").src=
`https://openweathermap.org/img/wn/${icon}@2x.png`;

getForecast(city);

}

/* FORECAST */

async function getForecast(city){

let url=`https://api.openweathermap.org/data/2.5/forecast?q=${city},IN&units=metric&appid=${apiKey}`;

let res=await fetch(url);

let data=await res.json();

let forecast=document.getElementById("forecast");

forecast.innerHTML="";

for(let i=0;i<data.list.length;i+=8){

let item=data.list[i];

let date=new Date(item.dt_txt);

forecast.innerHTML+=`

<div class="day">

<p>${date.toLocaleDateString("en",{weekday:"short"})}</p>

<img src="https://openweathermap.org/img/wn/${item.weather[0].icon}.png">

<p>${Math.round(item.main.temp)}°C</p>

</div>

`;

}

}

/* GPS WEATHER */

function getLocation(){

navigator.geolocation.getCurrentPosition(async pos=>{

let lat=pos.coords.latitude;
let lon=pos.coords.longitude;

let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

let res=await fetch(url);

let data=await res.json();

document.getElementById("temp").innerText=data.main.temp+"°C";
document.getElementById("desc").innerText=data.weather[0].description;
document.getElementById("location").innerText=data.name;

});

}

/* THEME */

document.getElementById("themeBtn").onclick=()=>{

document.body.classList.toggle("light");

};