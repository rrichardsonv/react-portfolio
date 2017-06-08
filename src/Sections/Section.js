import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InfoRollerContainer from './InfoRollerContainer'
import Shelves from './Shelves/index'
import data from '../json/copy.json'

class Section extends Component {
  render () {
    const { name, infoProps, bounds, shelves, type } = this.props
    return (
      <div className='section'>
        <div className='container-fluid no-gutter'>
          <div
            className={`${name}-section section-row row`}>
            <InfoRollerContainer
              bounds={bounds}
              infoProps={infoProps}
            />
            <Shelves
              copy={data[name] || null}
              type={type}
              shelves={shelves}
            />
          </div>
        </div>
      </div>
    )
  }
}
const { string, object, array } = PropTypes
Section.propTypes = {
  name: string,
  bounds: object,
  infoProps: object,
  shelves: array,
  type: string
}

export default Section
