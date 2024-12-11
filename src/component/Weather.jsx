import { useState } from 'react';

export const Weather = () => {
  const [name, setName] = useState('');
  const [temp, setTemp] = useState('');
  const [location, setLocation] = useState('');
  const [country, setCountry] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [humi, setHumi] = useState('');
  const [wind, setWind] = useState('');
  const apiKey = '2031cbf3b3a86455a2dbb98bc536f377';

  // Function to fetch weather data
  const handleSearch = async () => {
    if (!name) {
      alert('Please enter a location');
      return;
    }
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.cod !== 200) {
        alert(data.message);
        return;
      }

      console.log(data); // Debugging: log API response
      setTemp(`${data.main.temp} °C`);
      setLat(data.coord.lat.toString());
      setLon(data.coord.lon.toString());
      setHumi(`${data.main.humidity}%`);
      setWind(`${data.wind.speed} km/h`);
      setLocation(data.name);
      setCountry(data.sys.country);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <>
      <div className="Input-Container">
        <input
          type="text"
          placeholder="Enter location"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update the name dynamically
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {temp && (
        <div>
          <h3>Temperature: {temp}</h3>
          <h2>Location: {location}</h2>
          <h4>Country: {country}</h4>
          <div>
            <h4>Latitude: {lat}</h4>
            <h4>Longitude: {lon}</h4>
          </div>
          <div>
            <p>Humidity: {humi}</p>
            <p>Windspeed: {wind}</p>
          </div>
        </div>
      )}
    </>
  );
};
