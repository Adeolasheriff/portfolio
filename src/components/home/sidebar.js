import { Sidebar, Nav, NavItem, } from "@asphalt-react/sidebar"
import { Check, } from "../../icons/icons";


function SidebarLinear () {

  return (
    <div className="mb-2 sticky-top" style={{overflow:'hidden'}}>
         <Sidebar>
     <div style={{backgroundColor:'#2F3645',padding:'4rem',color:'#fff'}}>
     <Nav>
            <NavItem>
                <img src='images/hi.jpeg' className='w-75 rounded-pill ms-4' alt='profile'/>
            </NavItem>
            <NavItem>
                <h4 style={{color:'orangered'}}>Adeola sheriff</h4>
            </NavItem>
            <NavItem>
                <p>Fullstack Developer</p>
            </NavItem>
            <NavItem>
              <hr/>
             <div className='d-flex bg-success p-2 text-white bg-opacity-50 gap-2'>
              <h6>Lagos</h6>
              <h6>Nigeria</h6>
             </div>
             <hr/>
            </NavItem>
            <NavItem>
                
                    <div className='d-flex gap-2'>
                        <Check/>
                     <p>HTML</p>
                    </div>  
                   
                 <div> </div>
                <div></div>
                <div></div>
            </NavItem>
          </Nav>
   
     </div>
    </Sidebar>
    </div>
  );
}

export default SidebarLinear;




    // <div id='sidebar' className='sticky-top' style={{overflow:'hidden'}}>
    //     <div style={{background:'#2c2c38'}} className='text-white my-5 ms-2 rounded p-5 shadow '>
    //          <div className='ms-5 container'>
    //          <img src="images/hi.jpeg" alt="profie" className=' rounded' width={'40%'}  />
    //          <h5 className='text-white my-4'>Adeola sheriff</h5>
    //          <p>Front-end Developer</p>
    //          </div>
    //          <hr />

    //           <div className='d-flex'>
    //              <h6>Location</h6>
    //              <h6 className='ms-auto'>Lagos , Nigeria</h6>
    //              </div>
    //              <hr />

    //                <div className='d-flex gap-2'>
    //                 <Check/>
    //                 <p>Html</p>
    //                   </div>

    //           <div className='d-flex gap-2'>
    //               <Check/>
    //               <p>CSS</p>
    //         </div>

    //           <div className='d-flex gap-2'>
    //               <Check/>
    //               <p>bootstrap</p>
    //           </div>

    //              <div className='d-flex gap-2'>
    //                <Check/>
    //                <p>Tailwind css</p>
    //           </div>
          
    //           <div className='d-flex gap-2'>
    //               <Check/>
    //               <p>Javascript</p>
    //           </div>

    //           <div className='d-flex gap-2'>
    //               <Check/>
    //               <p>React.js</p>
    //           </div>  
                   
    //                <hr /> 
                  
                  
    //            </div>
    //            <div className='ms-2 d-flex py-2' style={{ background:'#45474B', gap:'3rem'}}>
    //                     <a href="https://www.linkedin.com/feed?trk=p_mwlite_profile_self-primary_nav"> <Linkedin/> </a>
    //                     <a href="https://www.instagram.com/adeola.sheriff/"> <Instagram/></a>
    //                     <a href="https://github.com/Adeolasheriff?tab=repositories"> <Git/></a>
    //                     <a href="08097204764"> <Whatsapp/></a>
    //                     <a href="https://app.netlify.com/teams/adeolasheriff3/sites"> <Net/> </a>
              
    //              </div>
                    
    //              </div>