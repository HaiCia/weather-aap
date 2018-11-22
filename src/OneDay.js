import React, { Component } from 'react'

class OneDay extends Component {
  render() {
    const { day, temp, icon } = this.props
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]
    const newDate = new Date(day)
    const date = days[newDate.getDay()]
    const image = 'http://openweathermap.org/img/w/' + icon + '.png'
    return (
      <div className="weather">
        <h3 className="day">{date}</h3>
        <img className="img" src={image} alt=" " height="64" />
        <div className="temp">{Math.round(temp)}°C </div>
      </div>
    )
  }
}

export default OneDay
