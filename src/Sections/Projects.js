import React, { Component } from 'react'
import Section from './Section'
import data from '../json/projects.json'

class Projects extends Component {
  render () {
    return (
      <Section
        name={'projects'}
        type={data.type}
        bounds={{ top: 400, bot: 900 }}
        infoProps={data.assets}
        shelves={data.projects}
      />
    )
  }
}

export default Projects
