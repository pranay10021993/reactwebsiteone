import React from 'react';
import CardService from './CardService';
import Sdata from './Sdata';


const Service = () =>{
    return (
      <>

          <section >
            <div className='container-fluid'>
                <div className='row'>
                 
                    <div className='col-md-10 mx-auto mb-5'>
                          <div className='text-center mt-3'>
                              <h3>Services</h3>
                          </div>
                        <div className='row gy-4'>
                            {
                              Sdata.map ((val, ind ) => {
                                return  <CardService
                              
                                  imgsrc = {val.imgsrc}
                                  title ={ val.title}
                                />
                              })
                            }
                            </div>
                    </div>
                </div>
            </div>
          </section>
    
      </>
    );
  }
  
  export default Service;