import React from 'react'
import { Link } from 'react-router-dom'



export default function Works(props) {
  return (
<div className='row mt-5' style={{rowGap:'50px'}}>
    <div className="col-lg-6 col-sm-12 col-md-12">
      <div className='container'>
        <img src="images/first.JPG" alt="pocs" className='imm' />
        <div class="overlay">
           <h3>My first website</h3>
           <Link to={''}></Link>
        </div>

      </div>

    </div>
    <div className="col-lg-6 col-sm-12 col-md-12">
    <div className='container'>
        <img src="images/form.png" alt=""  className='imm'/>
        <div class="overlay">
          <h3>Created my first form using basic html and css</h3>
          <Link to={'https://firstformm.netlify.app'}>here</Link>
        </div>
     </div>
      </div>

    <div className="col-lg-6 col-sm-12 col-md-12">
    <div className='container'>
        <img src="images/2.JPEG" alt="" className='imm'  />
        <div class="overlay">
           <h3>I learnt how to collaborate</h3>
        </div>
     </div>
    </div>

    <div className="col-lg-6 col-sm-12 col-md-12">
    <div className='container'>
        <img src="images/boostrap.PNG" alt="" className='imm'  />
        <div class="overlay">
           <h3>first web using Css bootstrap</h3>
           <Link to={'https://adeolasheriffweb.netlify.app'}>here</Link>
        </div>
     </div>
    </div>

    <div className="col-lg-6 col-sm-12 col-md-12">
    <div className='container'>
        <img src="images/secondd.PNG" alt="" className='imm'  />
        <div class="overlay">
           <h3>website crea</h3>
           <Link to={'https://shevvvy.netlify.app'}>More practice with html css boostrap</Link>
        </div>
     </div>
    </div>

    <div className="col-lg-6 col-sm-12 col-md-12">
    <div className='container'>
        <img src="images/clac.PNG" alt="" className='imm'  />
        <div class="overlay">
           <h3>Calculator app using Javascript</h3>
           <Link to={'https://adeolasheriffcalculator.netlify.app'}>here</Link>
        </div>
     </div>
    </div>

    <div className="col-lg-6 col-sm-12 col-md-12">
    <div className='container'>
        <img src="images/hii.PNG" alt="" className='imm'  />
        <div class="overlay">
           <h3>Quiz app</h3>
           <Link to={''}></Link>
        </div>
     </div>
    </div>

    <div className="col-lg-6 col-sm-12 col-md-12">
    <div className='container'>
        <img src="images/first.PNG" alt="" className='imm'  />
        <div class="overlay">
           <h3>first react basic project</h3>
           <Link to={'https://subtle-daifuku-34861b.netlify.app'} >Click here</Link>
        </div>
     </div>
    </div>

    <div className="col-lg-6 col-sm-12 col-md-12">
    <div className='container'>
        <img src="images/shopping.JPG" alt="" className='imm'  />
        <div class="overlay">
           <h3>Consuming api using useStae,useEffect,Custom hook</h3>
        </div>
     </div>
    </div>

    <div className="col-lg-6 col-sm-12 col-md-12">
    <div className='container'>
        <img src="images/travel.PNG" alt="" className='imm'  />
        <div class="overlay">
           <h3>React travel app</h3>
           <Link to={'https://travel-reservationnn.netlify.app'}>Click</Link>
        </div>
     </div>
    </div>
   
      </div>
  )
}


