import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SkillBar extends Component {
  render () {
    const { name, level } = this.props
    return (
      <div
        style={{
          marginRight: '15px',
          marginLeft: '5px'}}
        className='row skill-bar'
      >
        <div
          style={{width: `${level}%`}}
          className='skill-area'
        >
          <p>{name}&nbsp;{level}%</p>
        </div>
      </div>
    )
  }
}
const { number, string } = PropTypes
SkillBar.propTypes = {
  name: string,
  level: number
}

export default SkillBar
