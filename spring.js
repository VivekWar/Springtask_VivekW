const apiKey = 'c72d407c3356f145774dd8f5821ef1b0';
    const apiUrl = 'http://api.weatherstack.com/current';

    async function fetchWeather(city) {
      city = city || document.getElementById('search-input').value;
      if (!city) return alert('Please enter a city name!');

      try {
        const res = await fetch(`${apiUrl}?access_key=${apiKey}&query=${city}`);
        const data = await res.json();

        if (data.error) {
          alert('City not found! Please try again.');
          return;
        }

        document.getElementById('weath-card').innerHTML = `
          <h1>${data.location.name}, ${data.location.country}</h1>
          <p><span id="temp">${data.current.temperature}°C</span></p>
          <p><span id="desc">${data.current.weather_descriptions[0]}</span></p>
          <p><strong>Humidity:</strong> <span id="hum">${data.current.humidity}%</span></p>
          <p><strong>Wind:</strong> <span id="wind">${data.current.wind_speed} km/h</span></p>
        `;
      } catch (err) {
        alert('Failed to fetch weath data. Please try again later.');
      }
    }

    async function loadKanpurWeather() {
      await fetchWeather('Kanpur');
    }
    window.onload = loadKanpurWeather;