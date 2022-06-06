const inputField = document.querySelector("input");
const btnSearch = document.getElementById("search");
const btnGetLocation = document.getElementById("getLocation");
const apiKey = "f9cc5e905c45c54b21197a00d9861927";

let path;

const searchDiv = document.getElementById("search");
const infoText = document.getElementById("info");

btnSearch.addEventListener("click", function(){
    if(inputField.value != ""){
        requestApi(inputField.value);
    }
    else{
        console.log("Empty Input");
    }
});

inputField.addEventListener("keypress", function(event){
    if(event.key === 'Enter'){
        if(inputField.value != ""){
            requestApi(inputField.value);
        }
        else{
            console.log("Empty Input");
        }
    } 
});

btnGetLocation.addEventListener("click", ()=>{
    if(navigator.geolocation){ // if navigator supports geo location
        navigator.geolocation.getCurrentPosition(onSuccess);
        // clear input feild
        inputField.value = '';
    }
    else{
        alert("Your browser does not support geolocation!");
    }
});

function onSuccess(position){
    // Get long and lat of the user device form the coords onject 
    const {latitude, longitude} = position.coords; 
    path = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    fetchData();
}

async function requestApi(city){
    path = `https://api.openweathermap.org/data/2.5/weather?q= ${city}&units=metric&appid=${apiKey}`;
    fetchData();
};

async function fetchData(){
    const response = await fetch(path);
    const json = await response.json();
    //return json;
    weatherDetails(json);
};

function weatherDetails(data){
    if(data.cod == "404" ){
        infoText.innerText = `"${inputField.value}" isn't a valid city name`;
        infoText.classList.add("error");
        infoText.classList.remove("info");
        infoText.focus();
    }
    else{
        infoText.classList.add("info");
        const city = data.name;
        const country = data.sys.country;
        const speed = data.wind.speed;
        const {description, icon, id} = data.weather[0];
        const {feels_like, humidity, temp} = data.main;

        document.getElementById("city").innerText = `Weather in ${city}, ${country}`;
        document.getElementById("temp").innerText = `${temp} °C`;
        document.getElementById("weather-description").innerText = `${description}`;
        document.getElementById("wind").innerText = `Wind Speed: ${speed} km/h`;
        document.getElementById("humidity").innerText = `Humidity: ${humidity}%`;
        document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + city + "')";

       document.getElementById("weather-icon").style.visibility = 'visible'; 
       document.getElementById("weather-icon").src =
       "https://openweathermap.org/img/wn/" + icon + ".png";
    }



    
} 