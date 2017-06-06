import React, { Component } from 'react'
import LinksNav from '../Sections/LinksNav'

class Banner extends Component {
  render () {
    return (
      <div className='banner'>
        <div className='banner-title gutter-l'>
          <h1 className='eggplant shadow banner-name'>
            Robert Richardson
          </h1>
          <h2 className='banner-job-title'>
            Web Developer
          </h2>
          <ul className='social-links'>
            <li><span className='bullet linkedin'><i className='fa fa-linkedin-square' ariaHidden />&nbsp;&nbsp;Linkedin</span></li>
            <li><span className='bullet github'><i className='fa fa-github' ariaHidden />&nbsp;&nbsp;Github</span></li>
            <li><span className='bullet email'><i className='fa fa-envelope' ariaHidden /></span></li>
          </ul>
        </div>
        <div className='banner-blurb gutter-r'>
          <div className='banner-nav'>
            <LinksNav links={[{display: 'about'}, {display: 'projects', target: '699px'}, {display: 'skills'}, {display: 'contact'}]}/>
          </div>
          <div className='banner-summary'>
            <h3 className="gutter-r gutter-l">About me</h3>
            <p className="gutter-r gutter-l">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur beatae quos voluptatum, excepturi rerum inventore maxime quod, provident iure molestias?</p>
            <p className="gutter-r gutter-l">Officia dignissimos, maxime animi hic iure, unde qui suscipit dolorum.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner
