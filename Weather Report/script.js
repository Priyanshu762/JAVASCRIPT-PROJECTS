const apikey="a5e1ab002f0963a908471662ec4c48c0";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchinput=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
async function checkwheather(city){
    const response=await fetch(apiUrl+city+'&appid=a5e1ab002f0963a908471662ec4c48c0');
    var data=await response.json();
    document.querySelector(".city").innerHTML=data.name; 
    document.querySelector(".temp").innerHTML=data.main.temp; 
    document.querySelector(".humidity").innerHTML=data.main.humidity; 
    document.querySelector(".wind").innerHTML=data.wind.speed; 
    // console.log(data)
}


searchbtn.addEventListener("click",()=>{
    checkwheather(searchinput.value);
})
