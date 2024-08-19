import Cerf from '../components/home/cerf'

import Header from '../components/header'
import Sidebar from '../components/home/sidebar'

export default function Certification() {
  return (
    <div className='row'>
      <div className="col-md-3 col-sm-12 col-lg-3" >
        <Sidebar />
      </div>
      <div className='col-md-3 col-sm-12 col-lg-9 ' style={{ background: '#2c2c38' }}>
        <Header />
        <Cerf />
      </div>

    </div>
  )
}
