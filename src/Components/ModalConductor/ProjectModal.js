import React, { Component } from 'react'
import ModalWrapper from './ModalWrapper'
import PropTypes from 'prop-types'

class ProjectModal extends Component {
  constructor (props) {
    super(props)
    this._formatContent = this._formatContent.bind(this)
  }
  _formatContent () {
    return (
      <div className='project-modal-body'>
        <div className='modal-image-wrapper'>
          <img
            className='modal-image'
            src={`./${process.env.PUBLIC_URL}/${this.props.image}`}
          />
        </div>
        {this.props.text.map((line) => {
          return (
            <p className='modal-text'>{line}</p>
          )
        })}
        <div className='btn-group modal-links'>
          {this.props.links.map((link) => {
            return (
              <a className='btn modal-btn' href={link.url}>{link.display}</a>
            )
          })}
        </div>
      </div>
    )
  }
  render () {
    return (
      <ModalWrapper
        title={this.props.title}
        children={this._formatContent()}
        hideModal={this.props.hideModal}
        showOk={false}
      />
    )
  }
}

const { string, arrayOf, shape, func } = PropTypes

ProjectModal.propTypes = {
  title: string,
  image: string,
  links: arrayOf(shape({
    url: string,
    display: string
  })),
  hideModal: func,
  text: string
}

export default ProjectModal
