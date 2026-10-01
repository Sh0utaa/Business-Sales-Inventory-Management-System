async function geocode(address) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(address)}&count=1&language=en&format=json`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Geocoding API error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.results || data.results.length === 0) {
        throw new Error(`Could not find location: ${address}`);
    }

    const location = data.results[0];

    return {
        latitude: location.latitude,
        longitude: location.longitude
    };
}

async function getWeather(latitude, longitude) {
    const url =
        `https://api.open-meteo.com/v1/forecast` +
        `?latitude=${latitude}` +
        `&longitude=${longitude}` +
        `&current=temperature_2m,rain,snowfall,weather_code` +
        `&timezone=auto`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Weather API error: ${response.status}`);
    }

    const data = await response.json();

    return {
        temperature: data.current.temperature_2m,
        rain: data.current.rain,
        snowfall: data.current.snowfall,
        weatherCode: data.current.weather_code
    };
}

export {
    geocode,
    getWeather
};