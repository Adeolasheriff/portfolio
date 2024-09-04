import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function Aboutme() {
  const [text] = useTypewriter({
    words: ['Full stack web developer', 'I build web applications'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 20,
  })
  return (
    <div className='me-4 rounded heyy'>
      <div className='other-img'>
      <div>
        <div className='d-flex' style={{ opacity: "100%",  }}>
          <div style={{marginTop:'14rem', marginLeft:"3rem"}}>
            <div>
              <h1 className='text-white'>Discover my Amazing<br /> Art Space!</h1>
              <span className='text-warning'>&lt;code&gt;</span>
              <span style={{ fontWeight: 'bold', color: 'white', fontSize: "20px" }}>
                {text}
              </span>
              <span style={{ color: 'darkcyan' }}><Cursor cursorStyle='!!' /></span>
              <span className='text-warning'>&lt;code&gt;</span>
            </div>
            <a href="#contact" className='btn btn-warning mt-4 p-3'> contact me</a>
          </div>
          <img src='images/hii.png' alt='Pic' className='mx-auto w-25 rounded-pill' style={{ marginTop: '6rem' ,marginLeft:"4rem"}}  />
        </div>
      </div>
      </div>
    </div>
  )
}










