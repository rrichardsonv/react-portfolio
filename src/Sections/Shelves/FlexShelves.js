import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ShelfItem from './ShelfItem'
import HtmlShelfItem from './HtmlShelfItem'

class FlexShelves extends Component {
  render () {
    const shelves = this.props.shelves
    return (
      <div className='col-md-6 col-sm-6 project-row groove-col'>
        <div className='flex-shelf'>
          {shelves.map((shelf) => {
            let result
            if (shelf.contentType === 'html') {
              result = (
                <HtmlShelfItem {...shelf} />
              )
            } else {
              result = (
                <ShelfItem {...shelf} />
              )
            }
            return result
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
