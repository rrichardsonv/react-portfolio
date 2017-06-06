import React, { Component } from 'react'
import ProjectModal from './ProjectModal'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import data from '../../Sections/json/modals.json'
import { setActiveModal } from '../../Stores/actionCreators'

class ModalConductor extends Component {
  constructor (props) {
    super(props)
    this._hideModal = this._hideModal.bind(this)
  }
  _hideModal () {
    this.props.dispatch(setActiveModal(''))
  }
  render () {
    let modal
    if (this.props.current != '') {
      const content = data.projects[this.props.current]
      modal = (
        <ProjectModal {...content} hideModal={this._hideModal} />
      )
    } else {
      modal = null
    }
    return modal
  }
}
const { func, string } = PropTypes

ModalConductor.propTypes = {
  dispatch: func,
  current: string
}

const mapStateToProps = (state) => {
  return {
    current: state.modals.active
  }
}

export default connect(mapStateToProps)(ModalConductor)
