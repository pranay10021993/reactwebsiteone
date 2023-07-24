import React from 'react';
import Common from './common';
import Homeimg from '../src/img/home.png'


const Home= () =>{
    return (
      <>
      <Common
       name ="Grow your business design with "
       imgsrc= {Homeimg}
       visit ="/About"
       btname= "Get Started"
      />
     </>
    );
  }
  
  export default Home;