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
          <FlexShelves
            blurb={this.props.copy}
            shelves={shelves}
          />
        )
        break
      case 'even':
        arrangement = (
          <EvenShelves
            blurb={this.props.copy}
            shelves={shelves}
          />
        )
        break
      default:
        arrangement = (
          <FlexShelves
            blurb={this.props.copy}
            shelves={shelves}
          />
        )
        break
    }
    return arrangement
  }
}
const { arrayOf, object, string, oneOf } = PropTypes
Shelves.propTypes = {
  copy: arrayOf(string),
  shelves: arrayOf(object),
  type: string
}

export default Shelves
