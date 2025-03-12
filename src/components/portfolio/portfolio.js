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
        <h2 className='text-center text-white mt-3'>About Me</h2>
        <div className='col-lg-4 col-md-12 col-sm-12 text-center text-white' data-aos='zoom-in'>
          <div className='p-3 mb-5' style={{ background: 'darkblue' }}>
            <h2 className='mb-3 mt-2'>Web Development</h2>
            <p className='fst-italic fs-6'>
              As a full-stack developer, I am skilled in combining front-end and back-end technologies to deliver complete, scalable web applications. I specialize in building efficient, secure, and high-performance web apps that provide seamless user experiences.
              <br />
              My backend expertise includes **C#** with **.NET Core** and **Entity Framework**, allowing me to build robust server-side applications and manage databases efficiently. Additionally, I work with **Dapper** for lightweight, high-performance database queries when needed, and **ADO.NET** for low-level database access, giving me fine-grained control over my database interactions.
              <br />
              I focus on developing RESTful APIs, handling authentication, and ensuring the smooth integration between the client and server. I’m proficient in building secure, scalable, and maintainable backend systems using the latest technologies.
              <br />
              On the front-end, I leverage frameworks like **React**, along with modern styling techniques like **Tailwind CSS**, **Bootstrap**, and **Material UI**, to create responsive, user-friendly interfaces.
              <br />
              I’m always looking for ways to grow my skills and currently exploring more advanced features in web development to create even better, more efficient solutions.
            </p>

          </div>
        </div>

        <div className='col-lg-4 col-md-12 col-sm-12 text-white text-center' data-aos='zoom-out'>
          <div className='p-2' style={{ background: 'darkblue' }}>
            <h2 className='mb-3 mt-2'>Front-End Developer</h2>
            <p className='fst-italic fs-6'>
              I build responsive and intuitive front-end applications using modern HTML, CSS, and JavaScript. My focus is on creating seamless and user-friendly experiences.
              <br />
              I'm highly skilled in working with modern JavaScript frameworks like React, Next.js, and UI libraries such as Bootstrap, Tailwind CSS, Material UI, Axios, and Ant Design, among others.
            </p>
          </div>
        </div>

        <div className='col-lg-4 col-md-12 col-sm-12 text-center text-white' data-aos='zoom-in'>
          <div className='p-4' style={{ background: 'darkblue' }}>
            <h3 className='mb-3 mt-2'>Backend Web Developer</h3>
            <p className='fst-italic fs-6'>
              I specialize in building robust, scalable, and secure server-side applications that power seamless user experiences. Solving complex problems with elegant code is my passion.
              <br />
              My backend expertise spans **Node.js** with **Express** for high-performance applications, as well as **C#** with **ASP.NET Core** for enterprise-level web services.
              <br />
              I'm highly proficient in working with **Microsoft SQL Server** through **Entity Framework** to design and manage relational databases with seamless integration into C# applications.
              <br />
              Additionally, I have extensive experience working with **MongoDB** for **Express.js** applications, utilizing its NoSQL capabilities to build highly scalable and flexible data models for modern web applications.
              <br />
              I excel at developing RESTful APIs, optimizing database queries, and ensuring data security while delivering solutions that scale as your business grows.
            </p>
          </div>
        </div>
      </div>
    </div>


  )
}
