import React from 'react'
import { Link } from 'react-router-dom'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function Aboutme() {
  const [text] = useTypewriter({
    words: ['Full stack web developer', 'I build web applications'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 20,
  })
  return (
    <div className='me-4 rounded '>
      <img src="images/2.jpeg" alt="cityy" className='other-img' />
      <div className='ms-5 hi' style={{ marginTop: '-21rem', marginBottom: '13rem' }}>
        <div className='d-flex' style={{ opacity: "100%" }}>
          <div>
            <div>
              <h1 className='text-white'>Discover my Amazing<br /> Art Space!</h1>
              <span className='text-warning'>&lt;code&gt;</span>
              <span style={{ fontWeight: 'bold', color: 'white', fontSize: "20px" }}>
                {text}
              </span>
              <span style={{ color: 'darkcyan' }}><Cursor cursorStyle='!!' /></span>
              <span className='text-warning'>&lt;code&gt;</span>
            </div>
            <Link to='#contact' className='btn btn-warning mt-4 p-3'>Contact me</Link>
          </div>
          <img src='images/hii.png' alt='Pic' className='w-25 mx-auto rounded-pill second-img' style={{ marginTop: '-9rem' }} />
        </div>
      </div>
    </div>



  )
}










