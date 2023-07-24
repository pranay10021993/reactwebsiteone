import React, { useState } from 'react';


const Contact = () => {

  const [data, setData] = useState ({
        fullname : "",
        phone :"",
        email : "",
        massage :"",
  })

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData ((preVal)=> {
      return {
        ...preVal,
        [name] : value,
      }
    })

  }

  const formSubmit =(e)=> {
    e.preventDefault();
    alert (`My Name Is ${data.fullname}, My Mobile No Is ${data.phone}. My Email Id Is ${data.email}, My Massage Is ${data.fullname}`);


  };
    return (
    <>
      <section >
        <div className='container-fluid'>
          <div className='row'>

            <div className='col-md-10 mx-auto mb-5'>
              <div className='text-center mt-3'>
                <h3>Contact</h3>
              </div>
              <div className='row gy-4 d-flex justify-content-center'>
                <div className='col-md-5'>
                  <div className="card p-4">
                    <form onSubmit={formSubmit}>
                      <div className="form-group">
                        <label for="exampleInputEmail1">Full Name</label>
                        <input type="text" className="form-control"  name="fullname" value={data.fullname} onChange={InputEvent} id="exampleInputEmail1" aria-describedby="emailHelp" />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputPassword1">Phone Number</label>
                        <input type="text" className="form-control" name="phone" value={data.phone} onChange={InputEvent} id="exampleInputPassword1" />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" className="form-control" name="email" value={data.email} onChange={InputEvent} id="exampleInputEmail1" aria-describedby="emailHelp" />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputPassword1">Massage</label>
                        <input type="text" className="form-control" name="massage" value={data.massage} onChange={InputEvent} id="exampleInputPassword1" />
                      </div>
                      <button type="submit" className="btn btn-info text-white mt-3">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Contact;