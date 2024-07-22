import React from 'react'
// import Sidebar from '../components/home/sidebar'
import Aboutme from '../components/home/aboutme'
import Header from '../components/header'
// import Portfolio from '../components/portfolio/portfolio'
import SidebarLinear from '../components/home/sidebar'
import Works from './work'
import Service from './service'


export default function Home() {
  return (
    <div className='row' style={{background:'#2c2c38'}}>
        <div className='col-md-3 col-sm-d-none col-sm-12'>
            <SidebarLinear/>
            </div>
            <div className='col-md-9 col-sm-12'>
                <Header/>
                <Aboutme/>
                 <Works/>
           


        
            </div>
             </div>
  )
}   
