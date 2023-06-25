import './App.css';

import Navbar from './components/Navbar';

import React, { Component } from 'react'
import News from './components/News.js';

export default class App extends Component {
  render() {
    return (
      <>
      <div>
        <Navbar/>
        <div className='my-3'>
         <News pageSize={9}
         country="in" category = "Science"/>
        </div>
      </div>
      </>
    )
  }
}







