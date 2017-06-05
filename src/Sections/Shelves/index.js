import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FlexShelves from './FlexShelves'
import EvenShelves from './EvenShelves'

class Shelves extends Component {
  render () {
    const shelves = this.props.shelves
    switch (this.props.type) {
      case 'flex':
        return (
          <FlexShelves shelves={shelves} />
        )
      case 'even':
        return (
          <EvenShelves shelves={shelves} />
        )
      default:
        return (
          <FlexShelves shelves={shelves} />
        )
    }
  }
}
const { arrayOf, object, string } = PropTypes
Shelves.propTypes = {
  shelves: arrayOf(object),
  type: string
}

export default Shelves
