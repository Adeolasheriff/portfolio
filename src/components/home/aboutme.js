import React from 'react'
import { Link } from 'react-router-dom'


export default function Aboutme() {
  return (
    <div>
      <div className="row mt-4 bg-danger" style={{rowGap:'40px'}}>
        <div className="col-lg-9 col-md-6">
             <div className='text-white mt-5 ms-5'>
              <h3>Discover my Amazing Artspace</h3>
               <p className='fs-5' style={{marginTop:'30px', marginBottom:'40px'}}>front end web developer</p>
               <Link to={'./contact'}style={{textDecoration:'none', color:'blue', background:'yellow', padding:'15px',}} >Contact me</Link>
          </div>
        
        </div>
        <div className="col-lg-3 col-md-6">
          <img src="images/hi.JPEG" alt="profile" width={'90%'} height={'100%'} />
        </div>
      </div>
        
         <div className='row text-white mt-4'>
             <h3 className='text-white'>My services</h3>

           <div className="col text-white">
              <h4 className='text-white'> Web developments</h4>
              <p>i can bla bla bla bla</p>
           </div>

           <div className="col text-white">  
              <h4>front end developer</h4>
               <p>i can build bla bla</p>
              </div>
      </div>
      </div>
  )
}
