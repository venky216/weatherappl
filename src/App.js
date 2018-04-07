import React,{Component} from 'react'
import Title from './Title'
import Form from './Form'
import Weather from './Weather'

const API_KEY = "d8c14ba9be16c146a13ddabe3e4577c8";

class App extends Component{
  state = {
    temperature :  undefined,
    city :undefined,
    country:undefined,
    humidity : undefined,
    description :undefined,
    error :undefined,
    icon : undefined
  }
  
  getweather =async (e) =>{
    e.preventDefault()
    const city = e.target.elements.city.value
    // const country = e.target.elements.country.value

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},lat=35&lon=139&appid=${API_KEY}`)
    const data = await api_call.json()
    if (city){
    console.log(data)
    this.setState({
      temperature : data.main.temp,
      city : data.name,
      country : data.sys.country,
      humidity : data.main.humidity,
      description : data.weather[0].description,
      icon : data.weather[0].icon,

      error : ""

    })
  }else{
    this.setState({
      temperature :  undefined,
      city :undefined,
      country:undefined,
      humidity : undefined,
      description :undefined,
      icon:undefined,
      error : "Please enter the value"
    })
  }
  }
  render(){
    return(
      <div>
        <Title />
        <Form getweather = {this.getweather}/>
        <Weather 
        temperature = {this.state.temperature}
        city = {this.state.city}
        country = {this.state.country}
        humidity = {this.state.humidity}
        description = {this.state.description}
        error = {this.state.error}
        icon = {this.state.icon}
        des = {this.des}
        />
      </div>
    )
  }
}

export default App