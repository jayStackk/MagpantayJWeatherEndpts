

//   STarting MY JS just to show my FETCHES are working! 
// using Query Selector
// using Axios 
// not finished yet but variables are declared, kinda. 
// going to add another function to show weather forecast for the WEEK
// Local Storage next
// Going to finish my css with two container and add NaVBAr navBar
// console.log working and showing the input city. 


  function getForecast(coordinates) {
    console.log(coordinates);
    let apiKey = "26f9e030a111095f4a45a2b8be0844f8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
  }
  
  function showWeather(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    
    celsiusTemperture = Math.round(
      response.data.main.temp);

    }




    

  
  
  
  function searchCity(city) {
    let apiKey = "26f9e030a111095f4a45a2b8be0844f8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);

    console.log(city)
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#city-index").value;
    searchCity(city);
  }

  let searchForm = document.querySelector("#city-search");
  searchForm.addEventListener("submit", handleSubmit);



  