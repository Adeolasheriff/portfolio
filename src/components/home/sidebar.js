import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Checkk,Git,Instagram,Linkedin,Net,Point} from '../../icons/icons';



function Sidebar() {
  const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
<div className='sticky-top bg-white'>
<div className=' '>
      <Button variant="warning" className="d-lg-none d-md-none" onClick={handleShow}>
        <Point/>
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

          <div className='d-flex gap-2 pb-5'style={{marginBottom:'3rem',marginTop:'.7rem'}}>
             <Checkk/>
             <p>AOS</p>
         </div>
          </div>
        </Offcanvas.Body>

        <div className='bg-danger p-2' style={{marginTop:'10%'}}> 
            <div className='hii gap-4'>
               <a href="r" className='ms-2'><Instagram/> </a>
                 <a href="r" className='me'><Git/></a>
                 <a href="r" className='me'><Linkedin/></a>
                 <a href="r" className='g' style={{marginLeft:'6%'}}> <Net/> </a>
            </div>
        </div>
      </Offcanvas>
         </div>
  
</div>
  );
}

export default Sidebar;
