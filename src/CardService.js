import React from 'react';
import { NavLink } from 'react-router-dom';


const CardService = (props) => {
    return (
        <>

            <div className='col-md-4 gy-5'>
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top img-fluid" alt="img" height="500px" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="#" className="btn btn-info text-white">Go somewhere</NavLink>
                    </div>
                </div>
            </div>

        </>
    );
}

export default CardService;