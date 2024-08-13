import React, { useEffect } from 'react'
import Aos from 'aos';
export default function Contact() {

   useEffect(() => {
      Aos.init({ duration: 1000, delay: 50 });
   }, [])
   return (
      <div id='contact'>
         <div className='mb-5' data-aos='fade-up'>
            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem similique voluptate liber
               <br /> o ad nostrum, voluptas elibr
               gendi, temporibus distinctio, tempora inventore vitae. Molestias, voluptatum nu
               <br />
               quam eius exercitationem eaque omnis fuga nostrum.</h1>
         </div>

         <div className='' data-aos='zoom-in' style={{ marginTop: "260px" }}>
            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem similique voluptate liber
               <br /> o ad nostrum, voluptas elibr
               gendi, temporibus distinctio, tempora inventore vitae. Molestias, voluptatum nu
               <br />
               quam eius exercitationem eaque omnis fuga nostrum.</h1>
         </div>
         <div className='' data-aos='zoom-out' style={{ marginTop: "260px" }}>
            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem similique voluptate liber
               <br /> o ad nostrum, voluptas elibr
               gendi, temporibus distinctio, tempora inventore vitae. Molestias, voluptatum nu
               <br />
               quam eius exercitationem eaque omnis fuga nostrum.</h1>
         </div>
         <div className='' data-aos='zoom-in' style={{ marginTop: "260px" }}>
            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem similique voluptate liber
               <br /> o ad nostrum, voluptas elibr
               gendi, temporibus distinctio, tempora inventore vitae. Molestias, voluptatum nu
               <br />
               quam eius exercitationem eaque omnis fuga nostrum.</h1>
         </div>

      </div>
   )
}
