import React, { useEffect } from 'react'
import Aos from 'aos'
export default function Portfolio() {
  useEffect(()=>{
  Aos.init({duration:1000, delay:50})
  },[])
  return (
    <div className='container' id='portfolio'>

         <div className='row do mt-5'> 
                  <h2 className='text-center text-white mt-3'>About me</h2>
             <div className='col-lg-4 col-md-12 col-sm-12 text-center text-white' data-aos = 'zoom-in'>
               <div className='bg-danger'> 
                <h2>Web development</h2>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illo placeat officiis possimus eos perspicia
                   <br />tis earum eveniet, quidem veritatis minima esse modi facere omnis delect <br />
                 us assumenda voluptates cumque molestias fugit!</p>
                   </div>
                </div>

           <div className='col-lg-4 col-md-12 col-sm-12 text-white text-center' data-aos='zoom-out'>
              <div className='bg-warning'>
                  <h2>Front-end developer</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illo placeat officiis possimus eos perspicia
                   <br />tis earum eveniet, quidem veritatis minima esse modi facere omnis delect <br />
                 us assumenda voluptates cumque molestias fugit!</p>
              </div>
              </div>

           <div className='col-lg-4 col-md-12 col-sm-12 text-center text-white' data-aos='zoom-in'>
             <div className='bg-danger'>
                <h3>Backend web developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illo placeat officiis possimus eos perspicia
                   <br />tis earum eveniet, quidem veritatis minima esse modi facere omnis delect <br />
                 us assumenda voluptates cumque molestias fugit!</p>
             </div>
           </div>
         </div>
      </div>

   
  )
}
