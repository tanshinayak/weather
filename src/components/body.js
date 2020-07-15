import React from 'react'
import './body.css'
const Body=({city,weather,toogle,country})=>{
    return(
        <div className='container'>
            <h1 className='city'>{city}<sup>{country}</sup></h1>
            <div className="content">
            <p>Temperature: {weather.temp}{toogle}</p>
           <p>Feels like: {weather.feels_like}{toogle}</p>
          <p>Humidity: {weather.humidity}%</p>
            </div>
        </div>
    )
}
export default Body;