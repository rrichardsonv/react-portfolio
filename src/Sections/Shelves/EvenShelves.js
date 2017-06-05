import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Skillbar from './SkillBar'

class EvenShelves extends Component {
  render () {
    const shelves = this.props.shelves
    return (
      <div className='col-md-6 col-sm-6 project-row groove-col even-shelf'>
        <br />
        <span className='blurb'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
        <div className='even-shelves'>
          <h4>Qualifications</h4>
          {shelves.map((shelf) => {
            return (
              <Skillbar
                key={shelf.id}
                {...shelf}
              />
            )
          })}
        </div>
      </div>
    )
  }
}
const { arrayOf, shape, string, object } = PropTypes
EvenShelves.propTypes = {
  shelves: arrayOf(shape({
    name: string,
    image: string,
    imageStyle: object
  }))
}

export default EvenShelves
