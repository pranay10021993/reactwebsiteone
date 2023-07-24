import React from 'react';
import { NavLink } from 'react-router-dom';


const Common= (props) =>{
    return (
      <>
        <section id='header' className=''>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-10 mx-auto'>
                        <div className='row'>
                            <div className='col-md-6 pt-5 px-5 d-flex justify-content-center flex-column'>
                                <h1 className=''>{props.name}
                                <strong className='text-info'> Pranay Likhar </strong></h1>
                                <h3>We are the team of talanted web devloper making website</h3>

                                <div className='mt-3'>
                                    <NavLink to={props.visit} className='btn btn-info'>{props.btname}</NavLink>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <img src={props.imgsrc} className='img-fluid px-5
                                ' width="500px"/>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
  }
  
  export default Common;