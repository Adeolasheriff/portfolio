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
<div className='sticky-top bg-black mt-2'>
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
          <img src='images/shevvy.png' className='rounded first-img  mb-4' alt='profile'/>
          <h4 className='mt-2 text-warning font-bold'>Adeola Sheriff</h4>
          <h6 className='mt-3 text-warning font-extrabold'>Fullstack Developer</h6>
          <hr />
          <div className='d-flex bg-opacity-50 mt-4 mb-4 gap-2'>
              <h6 className='text-warning '>Lagos</h6>
              <h6 className='text-warning'>Nigeria</h6>
           </div>
         </div>

          <div className='d-flex gap-2 mb-3'>
             <Checkk/>
             <p className='text-warning'>HTML, CSS, Javascript</p>
         </div>

          <div className='d-flex gap-2 mb-3'>
             <Checkk/>
             <p className='text-warning'>Material UI, React Bootstrap</p>
         </div>

          <div className='d-flex gap-2 mb-3'>
             <Checkk/>
             <p className='text-warning'>Axios, Ant-Design</p>
         </div> 

          <div className='d-flex gap-2 mb-3'>
             <Checkk/>
             <p className='text-warning'>React.js</p>
         </div>

          <div className='d-flex gap-2 mb-3'>
             <Checkk/>
             <p className='text-warning'>Node.Js</p>
         </div>

          <div className='d-flex gap-2 mb-3'>
             <Checkk/>
             <p className='text-warning'> Express.Js</p>
         </div>

          <div className='d-flex gap-2 mb-3'>
             <Checkk/>
             <p className='text-warning'>C-Sharp</p>
         </div>
         <div className='d-flex mb-3 gap-2'>
             <Checkk/>
             <p className='text-warning'>ADO.NET</p>
         </div>
         <div className='d-flex gap-2 mb-3'>
             <Checkk/>
             <p className='text-warning'>Entity-Framework</p>
         </div>

         <div className='d-flex gap-2 '>
             <Checkk/>
             <p className='text-warning'>Azure</p>
         </div>
          </div>
        </Offcanvas.Body>
         <hr /> 
          <div className="bg-black p-2">
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
