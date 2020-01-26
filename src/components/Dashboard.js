import React from 'react'
import Forecast from './Forecast'
import { Header, Form, Dimmer, Loader } from 'semantic-ui-react'

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
    this.setState({ isLoading: true })
    fetch(`http://localhost:3001/forecasts/${this.state.selectedCity.key}`)
    .then(resp => resp.json())
    .then(weatherData => this.setState({ forecast: weatherData, isLoading: false }))
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
          placeholder='New York'
          options={options()}
          onChange={this.handleOnChange}
          />
          <Form.Button size='medium'>View Forecast</Form.Button>
        </Form>

        {this.state.isLoading ?
        <Dimmer active>
          <Loader />
        </Dimmer> :
        <Forecast forecast={this.state.forecast}/> }
      </div>
    )
  }

}

export default Dashboard