import React from 'react'
import { Grid } from 'semantic-ui-react'

class Forecast extends React.Component {
  render() {
    return(
      <Grid centered columns={3}>
        {this.props.forecast.map(day => {
          return <Grid.Column>
            <h1>{day.Date}</h1>
            <p>High: {day.Temperature.Maximum.Value} F</p>
            <p>Low: {day.Temperature.Minimum.Value} F</p>
            <p>Daytime: {day.Day.IconPhrase}</p>
            <p>Nighttime: {day.Night.IconPhrase}</p>
          </Grid.Column>
        })}
      </Grid>
    )
  }
}

export default Forecast