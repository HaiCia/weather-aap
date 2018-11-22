import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import OneDay from './OneDay.js'
//import data from './data.json'

class App extends Component {
  state = {
    name: '',
    country: '',
    temp: []
  }
  getWeather = () => {
    fetch(
      'http://api.openweathermap.org/data/2.5/forecast?id=2644688&units=metric&appid=c8701fe12712f070982ce15d407f39de'
    )
      .then(results => {
        return results.json()
      })
      .then(r => {
        this.setState({
          name: r.city.name,
          country: r.city.country,
          temp: r.list
        })
      })
  }
  componentDidMount() {
    this.getWeather()
  }

  render() {
    const { name, country, temp } = this.state
    let midDays = temp.filter(item => item.dt_txt.includes('12:00:00'))
    return (
      <div className="App">
        <h1>
          Weather for {name}, {country}.
        </h1>
        <div>Actual is:</div>
        <ol>
          {console.log(midDays)}
          {midDays.map(day => (
            <OneDay
              key={day.dt}
              temp={day.main.temp}
              day={day.dt_txt}
              icon={day.weather[0].icon}
            />
          ))}
        </ol>
      </div>
    )
  }
}

export default App
