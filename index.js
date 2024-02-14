
let search = document.querySelector('input');
let form = document.querySelector('form')
let submit_btn = document.querySelector('button');
let city = document.querySelector('#city');
let time = document.querySelector('#time');
let degree = document.querySelector('#degree');
let max_degree = document.querySelector('#max-degree');
let min_degree = document.querySelector('#min-degree');
let weather_description = document.querySelector('#weather_description');
let humidity = document.querySelector('#humidity');
let wind = document.querySelector('#wind');
let visibility = document.querySelector('#visibility')
let card = document.querySelector('.card')
let bgchange = document.getElementById('set')



form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if (search.value !== '') {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=816366c90cdddb7e620a6932c7df52ff`)
        .then(res => res.json())
        .then(datas => {
            city.innerHTML = datas.name;
            time.innerHTML = new Date().toDateString();
            let temperature = Math.floor(datas.main.temp - 273.15);
            degree.innerHTML = `${temperature}°C`;
            max_degree.innerHTML = Math.floor(datas.main.temp_max - 273.15) + "°C";
            min_degree.innerHTML = Math.floor(datas.main.temp_min - 273.15) + "°C";
            weather_description.innerHTML = datas.weather[0].description;
            humidity.innerHTML = `${datas.main.humidity}%`;
            visibility.innerHTML = `${datas.visibility / 1000}Km`;
            wind.innerHTML = `${datas.wind.speed}Km`;
            console.log(datas);
            if (temperature > 26) {
                bgchange.style.backgroundImage = 'url(Bg-1.webp)';
            } else if (temperature > 19 && temperature <= 26) {
                bgchange.style.backgroundImage = 'url(Bg-2.webp)';
            } else if (temperature <= 19) {
                bgchange.style.backgroundImage = 'url(Bg-3.webp)';
                
            }
        })
    } else {
        alert('Please enter the city name');
    }
})

    

                                