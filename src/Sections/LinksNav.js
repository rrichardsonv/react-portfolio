import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LinksNav extends Component {
  constructor (props) {
    super(props)
    this._handleLinkClick = this._handleLinkClick.bind(this)
  }
  _handleLinkClick () {
    window.scrollTo(0, 750)
  }
  render () {
    return (
      <div className='btn-group'>
        {this.props.links.map((link) => {
          return (
            <a
              key={`#${link.display}`}
              href={link.url ? link.url : '#' + link.display}
              className='btn nav-btn'
              onClick={this._handleLinkClick}
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
