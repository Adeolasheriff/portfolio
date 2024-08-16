import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos'

export default function Works(props) {
   useEffect(() => {
      Aos.init({
         duration: 1200,
         delay: 40,
         once: true
      })
   }, [])
   return (
      <div className='row mt-5' style={{ rowGap: '50px' }}>
         <div className="col-lg-6 col-sm-12 col-md-12" data-aos='zoom-in'>
            <div className='container'>
               <img src="images/first.JPG" alt="pocs" className='imm' />
               <div class="overlay">
                  <h3>My first website</h3>
                  {/* <Link to={'https://aquamarine-valkyrie-fcc36d.netlify.app/group'} target='blank'>here</Link> */}
                  <a href="https://aquamarine-valkyrie-fcc36d.netlify.app/group" target='blank'>here</a>
                
               </div>

            </div>

         </div>
         <div className="col-lg-6 col-sm-12 col-md-12" data-aos='zoom-out'>
            <div className='container'>
               <img src="images/form.png" alt="" className='imm' />
               <div class="overlay">
                  <h3>Created my first form using basic html and css</h3>
                  {/* <Link to={'https://firstformm.netlify.app'} target='blank'>here</Link> */}
                  <a href="https://firstformm.netlify.app" target='blank'> here</a>
               </div>
            </div>
         </div>

         <div className="col-lg-6 col-sm-12 col-md-12" data-aos='zoom-in'>
            <div className='container'>
               <img src="images/2.JPEG" alt="" className='imm' />
               <div class="overlay">
                  <h3>I learnt how to collaborate</h3>
                  <Link to={''}>here</Link>
               </div>
            </div>
         </div>

         <div className="col-lg-6 col-sm-12 col-md-12" data-aos='zoom-out'>
            <div className='container'>
               <img src="images/boostrap.PNG" alt="" className='imm' />
               <div class="overlay">
                  <h3>first web using Css bootstrap</h3>
                  <Link to={'https://adeolasheriffweb.netlify.app'} target='blank'>here</Link>
               </div>
            </div>
         </div>

         <div className="col-lg-6 col-sm-12 col-md-12" data-aos='zoom-in'>
            <div className='container'>
               <img src="images/secondd.PNG" alt="" className='imm' />
               <div class="overlay">
                  <h3>website crea</h3>
                  <Link to={'https://shevvvy.netlify.app'} target='blank'>More practice with html css boostrap</Link>
               </div>
            </div>
         </div>

         <div className="col-lg-6 col-sm-12 col-md-12" data-aos='zoom-in'>
            <div className='container'>
               <img src="images/clac.PNG" alt="" className='imm' />
               <div class="overlay">
                  <h3>Calculator app using Javascript</h3>
                  <Link to={'https://adeolasheriffcalculator.netlify.app'} target='blank'>here</Link>
               </div>
            </div>
         </div>

         <div className="col-lg-6 col-sm-12 col-md-12" data-aos='zoom-in'>
            <div className='container'>
               <img src="images/travel.PNG" alt="" className='imm' />
               <div class="overlay">
                  <h3>Quiz application</h3>
                  <Link to={'https://github.com/Adeolasheriff/quizapp'} target='blank'>github view</Link> <br />
                  <Link to={'https://beautiful-raindrop-70da86.netlify.app'} target='blank'>browswer view</Link>
               </div>
            </div>
         </div>

         <div className="col-lg-6 col-sm-12 col-md-12" data-aos='zoom-in'>
            <div className='container'>
               <img src="images/clock.PNG" alt="" className='imm' />
               <div class="overlay">
                  <h3>responsive analog clock</h3>
                  <Link to={'https://analogclockkk.netlify.app'} target='blank'>Analog clock</Link>
               </div>
            </div>
         </div>

         <div className="col-lg-6 col-sm-12 col-md-12" data-aos='zoom-in'>
            <div className='container'>
               <img src="images/first.PNG" alt="" className='imm' />
               <div class="overlay">
                  <h3>first react basic project</h3>
                  <Link to={'https://subtle-daifuku-34861b.netlify.app'} target='blank'>Click here</Link>
               </div>
            </div>
         </div>

         <div className="col-lg-6 col-sm-12 col-md-12" data-aos='zoom-in'>
            <div className='container'>
               <img src="images/shopping.JPG" alt="" className='imm' />
               <div class="overlay">
                  <h3>Consuming api using useStae,useEffect,Custom hook</h3>
               </div>
            </div>
         </div>

         <div className="col-lg-6 col-sm-12 col-md-12" data-aos='zoom-in'>
            <div className='container'>
               <img src="images/travel.PNG" alt="" className='imm' />
               <div class="overlay">
                  <h3>React travel app</h3>
                  <Link to={'https://travel-reservationnn.netlify.app'} target='blank'>Click</Link>
               </div>
            </div>
         </div>

      </div>
   )
}


