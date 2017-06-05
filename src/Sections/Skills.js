import React, { Component } from 'react'
import Section from './Section'
import data from './json/skills.json'

class Skills extends Component {
  render () {
    return (
      <Section
        name={'skills'}
        type={data.type}
        bounds={{top: 1300, bot: 500}}
        infoProps={data.assets}
        shelves={data.skills}
      />
    )
  }
}

export default Skills
