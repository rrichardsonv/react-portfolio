import React from 'react'
import PropTypes from 'prop-types'
import BaseComponent from '../Components/BaseComponent'
import InfoRoller from './InfoRoller'

class InfoRollerContainer extends BaseComponent {
  constructor (props) {
    super(props)
    this._bind('_handleScroll')
    this.state = {
      ty: 0
    }
  }
  componentDidMount () {
    window.addEventListener('scroll', this._handleScroll)
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this._handleScroll)
  }
  _handleScroll (e) {
    let newY = e.currentTarget.pageYOffset - this.props.bounds.top
    if (newY < 0) {
      newY = 0
    } else if (newY > this.props.bounds.bot) {
      newY = this.props.bounds.bot
    }
    var newPos = newY
    this.setState({ty: newPos})
  }
  render () {
    const infoProps = this.props.infoProps
    return (
      <div
        className='col-md-6 col-sm-6 contact-row groove-col'
      >
        <InfoRoller
          pos={`translate(0,${this.state.ty}px)`}
          {...infoProps}
        />
      </div>
    )
  }
}

const { shape, number, string } = PropTypes
InfoRollerContainer.propTypes = {
  infoProps: shape({
    pos: number,
    title: string,
    image: string
  }),
  bounds: shape({
    top: number,
    bot: number
  })
}
export default InfoRollerContainer
