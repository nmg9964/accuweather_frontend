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

// class Selection extends React.Component {
//   state = { 
//     topLocations: [],
//     selectedLocation: {},
//     forecasts: []
//   }

//   handleOnChange = (event, { value }) => {
//     this.setState({ selectedLocation: value })
//   }

//   handleOnSubmit = () => {
//     this.setState({ isLoading: true })
//     fetch(`http://localhost:3001/forecasts/${this.state.selectedLocation.key}`)
//     .then(resp => resp.json())
//     .then(data => {
//       console.log(data)
//       this.setState({ forecasts: data, isLoading: false })
//     })
//   }

//   render() {
//     const options = () => {
//       let locations = []
//       this.state.topLocations.map(location =>
//       locations.push({ key: location.key, text: location.name, value: location }))
//       console.log(locations)
//       return locations
//     }

//     return(
//       <div>
//        <Dropdown
//         placeholder='Select Location'
//         fluid
//         selection
//         value={this.state.selectedLocation}
//         options={options()}
//         onChange={this.handleOnChange}/>

//         <Button onClick={this.handleOnSubmit}>Submit</Button>

//         {this.state.isLoading ?
//         <Dimmer active>
//           <Loader />
//         </Dimmer> :
//         <Forecast
//         forecasts={this.state.forecasts}/>}
//       </div>
//     )
//   }
// }

// export default Selection