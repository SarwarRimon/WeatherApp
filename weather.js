const srcbtn = document.getElementById("btn");

srcbtn.addEventListener('click', () => {
    const city = document.getElementById("inputcity").value;
    const pcity = document.getElementById("cityname");
    const oppic = document.getElementById("oppic");
    const tem = document.getElementById("temp");
    const hmdty = document.getElementById("percentage");
    const speed = document.getElementById("speed");
    const api = '1d4e5801618050cf816eac190e3c942a';
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;

    fetch(apiurl)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            const description = data.weather[0].description.toLowerCase(); // Convert to lowercase
            const tempparature = data.main.temp;
            const humidity = data.main.humidity;
            const windsspeed = data.wind.speed;

            // Set image based on description
            if (description.includes("cloud")) {
                oppic.src = "/appweather/images/clouds.png";
            } else if (description.includes("haze")) {
                oppic.src = "/appweather/images/haze.png";
            } else if (description.includes("rain")) {
                oppic.src = "/appweather/images/rain.png";
            } else if (description.includes("drizzle")) {
                oppic.src = "/appweather/images/drizzle.png";
            } else if (description.includes("mist")) {
                oppic.src = "/appweather/images/mist.png";
            } else if (description.includes("snow")) {
                oppic.src = "/appweather/images/snow.png";
            } 
            else if (description.includes("clear")) {
                oppic.src = "/appweather/images/clear.png";
            } 
            else {
                oppic.src = "/appweather/images/default.png"; // Default image if no description matches
            }

            // Update weather details
            tem.innerHTML = `${tempparature}&#8451;`;
            pcity.innerText = city;
            hmdty.innerText = `${humidity}%`;
            speed.innerText = `${windsspeed} Km/h`;
        })
        .catch(error => {
            console.log('Oops! Sorry', error);
            const info = document.getElementById("details");
            info.innerHTML = `
                <p>City Not Found</p>
            `;
        });
});
