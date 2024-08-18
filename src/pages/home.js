import React from 'react'
import Aboutme from '../components/home/aboutme'
import Header from '../components/header'
import SidebarLinear from '../components/home/sidebar'
import Works from './work'
import Portfolio from '../components/portfolio/portfolio'
import Contact from './contact'



export default function Home() {
  return (
    <div className='row do' style={{background:'#2c2c38'} }>

       <div className='col-md-3 col-sm-12'>
            <SidebarLinear/>
            </div>
            <div className='col-md-9 col-sm-12'>
                <Header/>
                <Aboutme/>
                 <Portfolio/>
                 <Works/>
                 <Contact/>
             </div>
       </div>
         
  )
}   
