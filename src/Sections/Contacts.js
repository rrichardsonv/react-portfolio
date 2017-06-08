import React, { Component } from 'react'
import LinksNav from './LinksNav'
import InfoRoller from './InfoRoller'
import data from '../json/contacts.json'
import blurb from '../json/copy.json'

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
            {blurb.contact.map((para) => {
              return (
                <p className='center-p'>{para}</p>
              )
            })}
            <LinksNav external links={data.links} />
          </div>
        </div>
      </div>
    )
  }
}

export default Contacts
