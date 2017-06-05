import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LinksNav extends Component {
  render () {
    return (
      <div className='btn-group brd-top'>
        {this.props.links.map((link) => {
          return (
            <a
              key={`#${link.display}`}
              href={link.url ? link.url : '#' + link.display}
              className='btn nav-btn'
            >
              {link.display}
            </a>
          )
        })}
      </div>
    )
  }
}
const { shape, string, arrayOf } = PropTypes
LinksNav.propTypes = {
  links: arrayOf(shape({
    url: string,
    display: string
  }))
}

export default LinksNav
