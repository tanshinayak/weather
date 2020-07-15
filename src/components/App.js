import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Body from "./body" 
import './App.css'
import github from '../images/github.png'
const App=()=>{
    const [city,setcity]=useState("New Delhi")
    const [country,setcountry]=useState("IN")
    const [search,setsearch]=useState("")
    const [weather,setWeather]=useState("")
    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4ef40c451ac2b825cdd38bb96edc2e03`)
        .then(response=>{
            setWeather(response.data.main)
        setcountry(response.data.sys.country)}
        )
        .catch((err)=>{console.log(err)})
        },[city])
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
        <Body city={city} weather={weather} toogle='°K' country={country}/>
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