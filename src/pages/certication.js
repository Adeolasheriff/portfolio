import React from 'react'
import Sidebar from '../components/home/sidebar'
import Header from '../components/header'
import Cerf from '../components/portfolio/cerf'

export default function certication() {
  return (
       <div className='row'>
        <div className="col-md-3 col-sm-12 col-lg-3" >
          <Sidebar/>
         </div>
         <div className='col-md-3 col-sm-12 col-lg-9 ' style={{background:'#2c2c38'}}>
       <Header/>
       <Cerf/>
       
         </div>

       </div>
  )
}
