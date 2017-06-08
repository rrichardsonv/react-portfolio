import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Skillbar from './SkillBar'

class EvenShelves extends Component {
  render () {
    let blurbSpace
    const shelves = this.props.shelves
    if (this.props.blurb != null) {
      blurbSpace = (
        <div className='blurb'>
            {this.props.blurb.map((para) => {
              return (
                <p>{para}</p>
              )
            })}
          </div>
      )
    } else {
      blurbSpace = null
    }
    return (
      <div className='col-md-6 col-sm-6 project-row groove-col even-shelf'>
        <br />
        {blurbSpace}
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
  blurb: arrayOf(string),
  shelves: arrayOf(shape({
    name: string,
    image: string,
    imageStyle: object
  }))
}

export default EvenShelves
