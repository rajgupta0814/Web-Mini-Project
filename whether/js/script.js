// alert("hi");
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "401e43c2632fe393d4473b625fdec0ea";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather() {
    // alert("Function called");
    // alert(searchBox.value);
    try {
        // alert("Inside try");
        const res = await fetch(apiUrl + searchBox.value + "&appid=" + apiKey);
        // alert("Response Received");
        const d = await res.json();
        console.log(d);
    
        document.querySelector(".weather-icon").src = `image/${d.weather[0].main.toLowerCase()}.png`;
        document.querySelector(".error-handling").style.display = "none";
        // alert("at line 16");
        document.querySelector(".weather").style.display = "block";
        // alert("at line 18");
        document.querySelector('.temp').innerHTML = d.main.temp+"℃";
        // alert("at line 20");
        document.querySelector('.city').innerHTML = d.name;
        // alert("at line 22");
        document.getElementById('humidity').innerHTML = d.main.humidity+"%";
        // alert("at line 24");
        document.getElementById('wind').innerHTML = d.wind.speed+"km/h";
        // alert("End of try");
    } catch (error) {
        // alert("Inside catch");
        document.querySelector(".error-handling").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error-handling").innerText = "Invalid City Name";
    }
    // alert("function called");
    // const res = await fetch(apiUrl + searchBox.value + "&appid=" + apiKey);
    // const d = await res.json();
    // console.log(d);
    // document.querySelector('.temp').innerHTML = d.main.temp;
    // document.querySelector('.city').innerHTML = d.name;
    // document.querySelector('.humidity').innerHTML = d.main.humidity;
    // document.querySelector('.wind').innerHTML = d.wind.speed;
}
searchBtn.addEventListener('click', checkWeather);
// checkWeather();
// alert("file linked");