import React from 'react'
import { Header, Form } from 'semantic-ui-react'

class Dashboard extends React.Component {
  state = {
    cities: [],
    selectedCity: {}
  }

  componentDidMount() {
    fetch('http://localhost:3001/locations')
    .then(resp => resp.json())
    .then(locations => this.setState({ cities: locations }))
  }

  handleOnChange = (event, { value }) => {
    this.setState({ selectedCity: event.target.value })
  }

  handleOnSubmit = event => {
    event.preventDefault()
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
      </div>
    )
  }

}

export default Dashboard