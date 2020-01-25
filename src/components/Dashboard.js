import React from 'react'
import { Header, Form } from 'semantic-ui-react'

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Header textAlign='center' size='huge'>Three-Day Forecasts for the World's Top Cities</Header>
        <Form>
          <Form.Select
          fluid label='Please select a city'
          placeholder='Please select a city'
          />
          <Form.Button size='medium'>View Forecast</Form.Button>
        </Form>
      </div>
    )
  }

}

export default Dashboard