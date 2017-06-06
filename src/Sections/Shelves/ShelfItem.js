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
        className={`shelf-item
          ${this.props.shelfSpan}
          ${(this.props.id === this.props.activeProject && this.props.anim != null) ? this.props.anim : this.props.image}
          ${this.props.id === this.props.activeProject ? 'grey-focus' : ''}`
        }
      >
        <div
          onClick={this._handleProjectClick}
          className='item-display'>
          <span>
            {this.props.name}
          </span>
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
