import React from 'react'
import PropTypes from 'prop-types'
import BaseComponent from '../../Components/BaseComponent'

class HtmlShelfItem extends BaseComponent {
  constructor (props) {
    super(props)
    this._bind('handleMouseEnter', 'handleMouseLeave')
    this.state = {
      nameVisibility: 'hidden',
      greyFocus: ''
    }
  }

  render () {
    return (
      <div className={`shelf-item ${this.props.shelfSpan} ${this.state.greyFocus}`}>
        {this.props.children}
        <div className={`shelf-item-overlay ${this.state.nameVisibility}`}>
          <span>
            {this.props.name}
          </span>
        </div>
      </div>
    )
  }
}
const { string } = PropTypes
HtmlShelfItem.propTypes = {
  name: string,
  children: string,
  shelfSpan: string
}

export default HtmlShelfItem
