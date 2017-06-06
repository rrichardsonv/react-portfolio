import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FlexShelves from './FlexShelves'
import EvenShelves from './EvenShelves'

class Shelves extends Component {
  render () {
    const shelves = this.props.shelves
    let arrangement
    switch (this.props.type) {
      case 'flex':
        arrangement = (
          <FlexShelves shelves={shelves} />
        )
        break
      case 'even':
        arrangement = (
          <EvenShelves shelves={shelves} />
        )
        break
      default:
        arrangement = (
          <FlexShelves shelves={shelves} />
        )
        break
    }
    return arrangement
  }
}
const { arrayOf, object, string } = PropTypes
Shelves.propTypes = {
  shelves: arrayOf(object),
  type: string
}

export default Shelves
