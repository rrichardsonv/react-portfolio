import React, { Component } from 'react'
import LinksNav from './LinksNav'
import InfoRoller from './InfoRoller'
import data from './json/contacts.json'

class Contacts extends Component {
  render () {
    return (
      <div className='contacts'>
        <div className='l-contain'>
          <InfoRoller
            {...data.infoProps}
          />
        </div>
        <div className='center-wrapper r-contain'>
          <div className='contact-text'>
            Email: rrichardsonv@gmail.com
            <LinksNav links={data.links} />
          </div>
        </div>
      </div>
    )
  }
}

export default Contacts
