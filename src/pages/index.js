import Sidebar from '../components/home/sidebar'
import Header from '../components/header'
import Cerf from '../components/home/cerf'

export default function Index() {
  return (
       <div className='row'>
        <div className="col-md-3 col-sm-12 col-lg-3" >
          <Sidebar/>
         </div>
         <div className='col-md-3 col-sm-12 col-lg-9 ' style={{background:'#2c2c38'}}>
       <Header/>
          <Cerf/>
         </div>

       </div>
  )
}
