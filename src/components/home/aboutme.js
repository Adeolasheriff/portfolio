import React from 'react'

export default function Aboutme() {
  return (
    <div className='me-4 rounded '>
            <img src="images/2.jpeg" alt="cityy"  style={{height:"500px", width:'100%'}}/>
         <div className='ms-5 hi' style={{marginTop:'-21rem', marginBottom:'13rem'}}>
         <div className='d-flex' style={{opacity:"100%"}}>
          <div>
            <h1 className='text-black'>Discover my Amazing<br/> Art Space!</h1>
            <div>
              <h3 className='text-white mt-2'>
                <span className='text-warning'>&lt;code&gt;</span> 
                  I build web applications
                <span className='text-warning'>&lt;code&gt;</span>
              </h3>
            </div>
            <button className='btn btn-warning mt-4 p-3'>Contact me</button>
          </div>
          <img src='images/hii.png' alt='Pic' className='w-25 mx-auto rounded-pill second-img' style={{marginTop:'-9rem'}}/>
        </div>
         </div>
 </div>

     
 
  )
}













