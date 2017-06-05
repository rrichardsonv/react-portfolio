import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinksNav from './LinksNav'

class InfoRoller extends Component {
  render () {
    const { title, image, pos } = this.props
    const sections = [{display: 'about'}, {display: 'projects'}, {display: 'skills'}, {display: 'contact'}]
    return (
      <div
        className={`info-roller ${title}`}
        style={{transform: pos}}
      >
        <div className='roller-bg'>
          <img className='bg-img' src={`${process.env.PUBLIC_URL}/${image}`} />
        </div>
        <div className='roller-overlay'>
          <h1 className='roller-title'>{title}</h1>
          <LinksNav links={sections} />
        </div>
      </div>
    )
  }
}

const { string } = PropTypes
InfoRoller.propTypes = {
  title: string,
  image: string,
  pos: string
}

export default InfoRoller
