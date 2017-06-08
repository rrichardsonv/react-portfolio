import React, { Component } from 'react'
import LinksNav from '../Sections/LinksNav'
import data from '../json/copy.json'

class Banner extends Component {
  render () {
    return (
      <div className='banner'>
        <div className='banner-title gutter-l'>
          <h1 className='banner-name'>
            Robert Richardson
          </h1>
          <h2 className='banner-job-title'>
            Web Developer
          </h2>
          <ul className='social-links'>
            <li><a href='https://linkedin.com/in/rrichardsonv'><span className='bullet linkedin'><i className='fa fa-linkedin-square' ariaHidden />&nbsp;&nbsp;Linkedin</span></a></li>
            <li><a href='https://github.com/rrichardsonv'><span className='bullet github'><i className='fa fa-github' ariaHidden />&nbsp;&nbsp;Github</span></a></li>
            <li><a href='https://twitter.com/riposteMkV'><span className='bullet twitter'><i className='fa fa-twitter' ariaHidden />&nbsp;&nbsp;Twitter</span></a></li>
            <li><a href='mailto:rrichardsonv+site@gmail.com'><span className='bullet email'><i className='fa fa-envelope' ariaHidden />&nbsp;&nbsp;Email</span></a></li>
          </ul>
        </div>
        <div className='banner-blurb gutter-r'>
          <div className='banner-nav'>
            <LinksNav links={[{display: 'about'}, {display: 'projects', target: '699px'}, {display: 'skills'}, {display: 'contact'}]}/>
          </div>
          <div className='banner-summary'>
            <h3 className="gutter-r gutter-l summary-title">about me</h3>
            {data.banner.map((para) => {
              return (
                <p className="gutter-r gutter-l">{para}</p>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Banner
