import React from 'react'
import { Link } from 'react-router-dom'


export default function Cerf() {
    return (
        <div>
            <h2 className='mb-5 mt-5 text-white text-center'>Certifications</h2>
            <div className="row row-gap-5">

                <div className="col-lg-6 col-sm-12 col-md-12">
                    <div>
                        <div className='container'>
                            <img src="images/digital.PNG" alt="" className='imm' />
                            <div class="overlay">
                                <Link className='text-warning fs-4' style={{ fontStyle: "italic" }}
                                    to={'https://skillshop.exceedlms.com/student/award/rPgcUdBYWXbG3xNKhQFJ795f'} target='blank'>Click here</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12 col-md-12">
                    <div className='container'>
                        <img src="images/udemy.PNG" alt="" className='imm' />
                        <div class="overlay">
                            <Link className='text-warning fs-4' style={{ fontStyle: "italic" }}
                                to={'https://www.udemy.com/certificate/UC-90f91039-ea5a-4b99-8afa-456c008f7e9b/'} target='blank'>Click here</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12 col-md-12">
                    <div className='container'>
                        <img src="images/az1.jpeg" alt="" className='imm' />
                        <div class="overlay">
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12 col-md-12">
                    <div className='container'>
                        <img src="images/azure.png" alt="" className='imm' />
                        <div class="overlay">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}