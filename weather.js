async function getWeather() {
    try {
        const locationResponse = await fetch('https://ipapi.co/json/');
        const locationData = await locationResponse.json();
        const city = locationData.city;
        await fetchWeather(city);
    } catch (error) {
        console.error('Error getting location or weather:', error);
        document.getElementById('weatherContainer').textContent = "N/A";
    }
}

async function fetchWeather(city) {
    const apiUrl = `https://wttr.in/${encodeURIComponent(city)}?format=j1`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weatherContainer').textContent = "N/A";
    }
}

function displayWeather(data) {
    const weatherContainer = document.getElementById('weatherContainer');
    
    if (!data || !data.current_condition || data.current_condition.length === 0) {
        weatherContainer.textContent = "N/A";
        return;
    }

    const currentCondition = data.current_condition[0];
    const temperature = currentCondition.temp_C;

    weatherContainer.textContent = `${temperature}°C`;
}

document.addEventListener('DOMContentLoaded', () => {
    getWeather();
});
