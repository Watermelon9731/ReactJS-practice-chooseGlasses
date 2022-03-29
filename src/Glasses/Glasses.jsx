import React, { Component } from 'react'
import Glasses_Content from './Glasses_Content'
import Glasses_Header from './Glasses_Header'

export default class Glasses extends Component {
  render() {
    return (
      <div className='body-background'>
          <Glasses_Header />
          <Glasses_Content />
      </div>
    )
  }
}
