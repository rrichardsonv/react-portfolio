import React from 'react'
import BaseComponent from '../../Components/BaseComponent'

class ShelfItem extends BaseComponent {
  constructor (props) {
    super(props)
    this._bind('handleMouseEnter', 'handleMouseLeave', 'handleAnimationTrigger')
    this.state = {
      image: props.image,
      nameVisibility: 'hidden',
      greyFocus: '',
      anim: props.anim != null
    }
  }
  handleAnimationTrigger () {
    if (this.state.anim) {
      if (this.state.greyFocus === '') {
        this.setState({image: this.props.anim})
      } else {
        this.setState({image: this.props.image})
      }
    }
  }
  handleMouseEnter () {
    this.setState({nameVisibility: '', greyFocus: 'grey-focus'})
    this.handleAnimationTrigger()

  }
  handleMouseLeave () {
    this.setState({nameVisibility: 'hidden', greyFocus: ''})
    this.handleAnimationTrigger()
  }
  render () {
    const { shelfSpan, name } = this.props
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className={`shelf-item ${shelfSpan} ${this.state.greyFocus}`}
        style={{
          background: `url(./${process.env.PUBLIC_URL}/${this.state.image})`,
          backgroundSize: 'cover'
        }}
      >
        <div className={this.state.nameVisibility}>
          <span>
            {name}
          </span>
        </div>
      </div>
    )
  }
}
const { string } = React.PropTypes

ShelfItem.propTypes = {
  image: string,
  shelfSpan: string,
  name: string
}

export default ShelfItem
