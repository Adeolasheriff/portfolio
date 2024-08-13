import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Checkk,Dot,Git,Instagram,Linkedin, Whatsapp} from '../../icons/icons';
import { Link } from 'react-router-dom';



function Sidebar() {
  const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
<div className='sticky-top bg-white mt-2'>
<div className=' '>
      <Button variant="warning" className="d-lg-none d-md-none" onClick={handleShow}>
        <Dot/>
      </Button>
      <Offcanvas show={show} onHide={handleClose} responsive="md">
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div  className='' style={{marginLeft:'3.3rem', marginTop:'3px'}}>
            <div>
          <img src='images/hi.jpeg' className='rounded first-img' alt='profile'/>
          <h4 style={{color:'orangered'}}>Adeola sheriff</h4>
          <h6>Fullstack Developer</h6>
          <hr />
          <div className='d-flex bg-opacity-50 mt-4 mb-4 gap-2'>
              <h6>Lagos</h6>
              <h6>Nigeria</h6>
           </div>
         </div>

          <div className='d-flex gap-2 mb-3'>
             <Checkk/>
             <p>HTML</p>
         </div>

          <div className='d-flex gap-2 mb-3'>
             <Checkk/>
             <p>CSS</p>
         </div>

          <div className='d-flex gap-2 mb-3'>
             <Checkk/>
             <p>Material UI</p>
         </div> 

          <div className='d-flex gap-2 mb-3'>
             <Checkk/>
             <p>Javascript</p>
         </div>

          <div className='d-flex gap-2 mb-3'>
             <Checkk/>
             <p>React.js</p>
         </div>

          <div className='d-flex gap-2 mb-3'>
             <Checkk/>
             <p>React bootstrap</p>
         </div>

          <div className='d-flex gap-2 pb-5'style={{marginBottom:'1.8rem'}}>
             <Checkk/>
             <p>AOS</p>
         </div>
          </div>
        </Offcanvas.Body>
         <hr /> 
          <div className="bg-warning p-2">
             <div className="row row-gap-3">
             <div className="col ms-2">
               <Link to={'https://www.instagram.com/adeola.sheriff/'} target='blank'> <Instagram/></Link>
             </div>
             <div className="col">
                 <Link to={'https://www.linkedin.com/in/adeola-sheriff-734971296/'} target='blank'><Linkedin/> </Link>
             </div>
             <div className="col">
               <Link to={'https://github.com/Adeolasheriff?tab=repositories'} target='blank'><Git/></Link>
             </div>
             <div className="col">
             <Link to={'https://wa.me/2348097204764'} target='blank'><Whatsapp/></Link> 
             </div>
             </div>
          </div>
           
        
       
      </Offcanvas>
         </div>
  
</div>
  );
}

export default Sidebar;
