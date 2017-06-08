import React, { Component } from 'react'
import BaseComponent from '../../Components/BaseComponent'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setActiveProject, setActiveModal } from '../../Stores/actionCreators'

class ShelfItem extends BaseComponent {
  constructor (props) {
    super(props)
    this._bind('_handleMouseEnter', '_handleMouseLeave', '_handleProjectClick')
  }
  _handleProjectClick (ev) {
    ev.preventDefault()
    console.log(this.props.id)
    this.props.dispatch(setActiveModal(this.props.id))
  }
  _handleMouseEnter (ev) {
    this.props.dispatch(setActiveProject(this.props.id))
  }
  _handleMouseLeave (ev) {
    this.props.dispatch(setActiveProject(''))
  }
  render () {
    return (
      <div
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
        onClick={this._handleProjectClick}
        className={`
          ${this.props.shelfSpan}
          ${(this.props.id === this.props.activeProject && this.props.anim != null) ? this.props.anim : this.props.image}
          shelf-item
          ${this.props.id === this.props.activeProject ? 'grey-focus' : ''}`
        }
      >
        <div
          className='item-display'>
          <a href='' className='item-overlay-title'>
            {this.props.name}
          </a>
        </div>
      </div>
    )
  }
}
const { string, func } = PropTypes

ShelfItem.propTypes = {
  image: string,
  shelfSpan: string,
  name: string,
  activeProject: string,
  dispatch: func
}
const mapStateToProps = (state) => {
  return {
    activeProject: state.sections.project
  }
}

export default connect(mapStateToProps)(ShelfItem)
