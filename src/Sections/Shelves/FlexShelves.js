import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ShelfItem from './ShelfItem'

class FlexShelves extends Component {
  render () {
    const shelves = this.props.shelves
    return (
      <div className='col-md-6 col-sm-6 project-row groove-col'>
        <div className='flex-shelf'>
          {shelves.map((shelf) => {
              return (
                <ShelfItem {...shelf} />
              )
          })}
        </div>
      </div>
    )
  }
}
const { arrayOf, object } = PropTypes
FlexShelves.propTypes = {
  shelves: arrayOf(object)
}

export default FlexShelves
