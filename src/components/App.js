import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Body from "./body" 
import './App.css'
import github from '../images/github.png'
const App=()=>{
    const [city,setcity]=useState("New delhi")
    const [search,setsearch]=useState("")
    const [weather,setWeather]=useState("")
    useEffect(()=>{
        axios.get(`http://api.weatherstack.com/current?access_key=ec04f8fdac25ddf878d0751d17c8bb72&query=${city}`)
        .then(response=>{
            setWeather(response.data.current)}
        )
        .catch((err)=>console.log(err))},[city])

    const handlesubmit=(event)=>{
        event.preventDefault()
        setcity(search)
        setsearch("")
    }
    const handlesearch=(event)=>{
        setsearch(event.target.value)
    } 
return(
    <div className="div">
        <Heading />
        <form onSubmit={handlesubmit} className='form'>
          <input type='text' value={search} onChange={handlesearch}/>
          <button>Search</button>
        </form>
        <Body city={city} weather={weather} toogle='°C'/>
    </div>
)
}
const Heading=()=>{
return (
    <div className='headingcontainer'>
         <h1 className='heading'>
                Weather App
        </h1>
        <a href='https://github.com/tanshinayak'><img src={github} alt='github'className='image'></img></a>
    </div>
)
}
export default App