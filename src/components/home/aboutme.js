
import React from 'react'
import Service from '../../pages/service'

export default function Aboutme() {
  return (
    <div className='me-4 rounded'>
    <div className='w-100'>
            <img src="images/2.jpeg" alt="cityy" className='w-100' style={{height:"500px"}}/>
          </div>
         <div className='ms-5' style={{marginTop:'-26rem'}}>
         <div className='d-flex' style={{opacity:"100%"}}>
          <div>
            <h1 style={{color:"orangered"}}>Discover my Amazing<br/> Art Space!</h1>
            <div>
              <h3 className='text-white mt-2'>
                <span className='text-warning'>&lt;code&gt;</span> 
                  I build web applications
                <span className='text-warning'>&lt;code&gt;</span>
              </h3>
            </div>
            <button className='btn btn-warning mt-4'>Contact me</button>
          </div>
          <img src='images/hii.png' alt='Pic' className='w-25 mx-auto rounded-pill'/>
        </div>
         </div>
         
          <div style={{marginTop:'7rem'}}>
          <Service
         name = 'heyyyyyyyyyyyyyyyyyyy'
           />
          </div>

      </div>

     
 
  )
}













// import React from 'react'
// // import { Link } from 'react-router-dom'


// export default function Aboutme() {
//   return (
//    <div className='heyy d-flex gap-4'>
//         <div>
//         <h1 style={{color:'orangered'}}>Discover my Amazing art space</h1>
//         <h3 className='text-white'> <span className='text-warning'> &lt; code &gt; </span>
//         build web applications <span className='text-warning'> &lt; code &gt;</span> </h3>
//         <button className='btn btn-warning'> contact me</button>
//         </div>
//          <img src="images/hi.jpeg" alt="" className='ms-5' width={'14%'} />
//        </div>
      
//   )
// }
