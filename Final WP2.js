

var button = document.querySelector('.button')

var inputValue = document.querySelector('.inputValue')

var name = document.querySelector('.name');

var desc = document.querySelector('.desc');

var temp = document.querySelector('.temp');

var humi = document.querySelector('.humi');

var wind = document.querySelector('.wind');

var icon = document.querySelector('.icon');


//https://api.openweathermap.org/data/2.5/weather?q=+Springfield+&units=imperial&appid=69cc7c233bf6a8ee945ad9b75f33fb35
//https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=69cc7c233bf6a8ee945ad9b75f33fb35
//'https://api.openweathermap.org/data/2.5/weather?q=springfield,US-MA,840&units=imperial&appid=69cc7c233bf6a8ee945ad9b75f33fb35'
//https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=imperial&appid=69cc7c233bf6a8ee945ad9b75f33fb35
button.addEventListener('click', function(){

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=imperial&appid=69cc7c233bf6a8ee945ad9b75f33fb35')

    .then(response => response.json())

    .then(data => {

        var nameValue= data['name'];

        var tempValue = data['main']['temp'];

        var descValue = data['weather'][0]['description'];

        

        


        

        document.getElementById("city").innerHTML = nameValue;  
  
        

        temp.innerHTML = tempValue +(" °F");

        

        desc.innerHTML = descValue;

        

        //Add Humidity
        const {humidity}=data.main;
        const {speed}= data.wind;
        const {icon} = data.weather[0];

        document.querySelector('.humi').innerHTML="Humidity: " + humidity + " %";
        

        //Add Wind Speed
        document.querySelector('.wind').innerHTML="Wind Speed: "+ speed + " km/h";

        //Add Icon Switch
        

  
        document.querySelector('.icon').src="https://openweathermap.org/img/wn/"+ icon +".png";


       console.log(nameValue)
       console.log(tempValue)
       console.log(icon)
       console.log(descValue)
       console.log(humidity)
       console.log(speed)
        
    })


.catch(err => alert("Incorect Name!"))



})

    