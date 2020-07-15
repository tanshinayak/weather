import React from 'react'
import './body.css'
const Body=({city,weather,toogle})=>{
    return(
        <div className='container'>
            <h1 className='city'>{city}</h1>
            <div className="content">
            <p>Temperature: {weather.temperature}{toogle}</p>
    <p>Feels like: {weather.feelslike}{toogle}</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Cloud cover: {weather.cloudcover}%</p>
            </div>
        </div>
    )
}
export default Body;