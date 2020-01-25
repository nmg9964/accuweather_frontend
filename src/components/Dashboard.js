import React from 'react'
import Forecast from './Forecast'
import { Header, Form } from 'semantic-ui-react'

class Dashboard extends React.Component {
  state = {
    cities: [],
    selectedCity: {},
    forecast: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/locations')
    .then(resp => resp.json())
    .then(locations => this.setState({ cities: locations }))
  }

  handleOnChange = (event, { value }) => {
    this.setState({ selectedCity: value })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    fetch(`http://localhost:3001/forecasts/${this.state.selectedCity.key}`)
    .then(resp => resp.json())
    .then(weatherData => this.setState({ forecast: weatherData }))
  }

  render() {
    const options = () => {
      let citiesArray = []
      this.state.cities.map(city => {
        citiesArray.push({ key: city.key, text: city.name, value: city })
      })
      return citiesArray
    }

    return (
      <div>
        <Header textAlign='center' size='huge'>Three-Day Forecasts for the World's Top Cities</Header>
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Select
          fluid label='Please select a city'
          value={this.state.selectedCity}
          options={options()}
          onChange={this.handleOnChange}
          />
          <Form.Button size='medium'>View Forecast</Form.Button>
        </Form>

        {this.state.forecast.length > 0 ?
        <Forecast forecast={this.state.forecast}/>
        : null}
      </div>
    )
  }

}

export default Dashboard