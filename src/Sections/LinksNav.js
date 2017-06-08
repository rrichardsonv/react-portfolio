import React, { Component } from 'react'
import PropTypes from 'prop-types'

const findPos = (obj) => {
    var curtop = 0;
    console.dir(obj)
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}

class LinksNav extends Component {
  constructor (props) {
    super(props)
    this._handleLinkClick = this._handleLinkClick.bind(this)
  }
  _handleLinkClick (ev) {
    ev.preventDefault()
    window.scrollTo(0, findPos(document.getElementById(ev.target.href.split('#')[1])))
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
              onClick={this.props.external ? null : this._handleLinkClick}
            >
              {link.display}
            </a>
          )
        })}
      </div>
    )
  }
}
const { shape, string, arrayOf, bool } = PropTypes
LinksNav.propTypes = {
  external: bool,
  links: arrayOf(shape({
    url: string,
    display: string
  }))
}

export default LinksNav
