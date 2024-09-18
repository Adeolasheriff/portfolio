import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function Portfolio() {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 50 })
  }, [])
  return (
    <div className='container' id='portfolio'>

      <div className='row do mt-5'>
        <h2 className='text-center text-white mt-3'>About me</h2>
        <div className='col-lg-4 col-md-12 col-sm-12 text-center text-white' data-aos='zoom-in'>
          <div className='p-2' style={{background:'darkblue'}}>
            <h2 className='mb-3 mt-2'>Web development</h2>
            <p className='fst-italic'> I'm a highly motivated software developer,I craft innovative digital solutions that brings ideas to life.. <br />
            With a passion for building seamless online  experiences, I combine cutting edge technology with creative visions to deliver exceptional quality results 
            </p>
          </div>
        </div>

        <div className='col-lg-4 col-md-12 col-sm-12 text-white text-center' data-aos='zoom-out'>
          <div className='p-2' style={{background:'darkblue'}}>
            <h2 className='mb-3 mt-2'>Front-end developer</h2>
            <p className='fst-italic fs-6'>I build responsive front-end applications using modern HTML,CSS,JAVASCRIPT which are users friendly <br />
            I am skilled in using modern JavaScript frameworks like React,Next.js and css frameworks such as BOOSTRAP,TAILWIND CSS,MATERIAL UI,AXIOS,ANT DESIGNS with lot More

            </p>
          </div>
        </div>

        <div className='col-lg-4 col-md-12 col-sm-12 text-center text-white' data-aos='zoom-in'>
          <div className='p-2' style={{background:'darkblue'}}>
            <h3 className='mb-3 mt-2'>Backend web developer</h3>
            <p  className='fst-italic fs-6'>I specialize in crating robust,scalble and secure server-side applications that power seamless user experiences and also in solvings problems<br />
            i am skilled in using Node.js and its framework <b className='fst-italic text-danger'>EXPRESS</b>   <br />
            I am also proficient in using a wide range of databases such as MySQL, MongoDB
           


            </p>
          </div>
        </div>
      </div>
    </div>


  )
}
