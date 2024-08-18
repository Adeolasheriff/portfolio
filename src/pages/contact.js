import React from 'react'
import { Link } from 'react-router-dom'
import { Button, message, } from 'antd';
import { Git, Linkedin } from '../icons/icons'

export default function Contact() {
   const [messageApi, contextHolder] = message.useMessage();
   const success = () => {
      messageApi.open({
         type: 'success',
         content: 'This is a success message',
      });
   };

   return (

      <div className='mt-5' id='contact'>
         <div>
            <h3 className='text-white'>Contact information</h3>
            <div className="row row-gap-4 mt-5">

               <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className='bg-success p-2'>
                     <div className='d-flex gap-5 text-white'>
                        <h6>Country:</h6>
                        <h6 style={{ marginLeft: '4rem' }}>Nigeria</h6>
                     </div>

                     <div className='d-flex gap-5 text-white'>
                        <h6>City:</h6>
                        <h6 style={{ marginLeft: '6.4rem' }}>Lagos</h6>
                     </div>
                  </div>

               </div>
               <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className='bg-success p-4'>
                     <div className='d-flex gap-2 text-white'>
                        <h6>Email:</h6>
                        <h6 style={{ marginLeft: '3px' }}>adeolasheriff3@gmail.com</h6>
                     </div>

                     <div className='d-flex gap-3 text-white'>
                        <h6>Mobile:</h6>
                        <h6 style={{ marginLeft: '2rem' }}>+234 8148754569</h6>
                     </div>

                     <div className='d-flex gap-5 text-white'>
                        <h6>Resume:</h6>
                        <Link className='text-white' style={{ textDecoration: "none", marginLeft: '2rem' }} to={''} >View resumes</Link>
                     </div>

                  </div>
               </div>

               <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className=' bg-success p-2'>
                     <div className='d-flex gap-5 text-white mt-3 mb-2'>
                        <h6>Linkedin:</h6>
                        <Link style={{ marginLeft: '5rem' }} to={'https://www.linkedin.com/in/adeola-sheriff-734971296/'}> <Linkedin /></Link>
                     </div>
                     <div className='d-flex gap-5 text-white'>
                        <h6>Github</h6>
                        <Link style={{ marginLeft: '6rem' }} to={'https://github.com/Adeolasheriff?tab=repositories'}> <Git /></Link>
                     </div>
                  </div>
               </div>
            </div>
               <h2 className='text-white mb-5 '>Get in touch</h2>
            <form className='mt-5'>
                  <input type="text" className='form-control mb-3' placeholder="name" />
                  <input type="email" className='form-control mb-3' placeholder="email" required />
                    <textarea placeholder='message'className='form-control mb-3' rows="3"></textarea>
                    {contextHolder}
                    <Button className='bg-success p-4' onClick={success}>Success</Button>
            </form>
         </div>
      </div>
   )
}
