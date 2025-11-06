import React from 'react';
import './Home.css'
import Nav from '../components/Nav.jsx'
import hero_img from '../img/gemenini_hero.png'


const  Home= () => {
    return ( <>

      <section className='s1_Home'>
      <Nav/>

      <div className='div_hero'>
        <img className='heroimg' src={hero_img} alt='hero_img'/>

        <div className='div_cntnt_hero'>
        <h1>Measure Twice,<br/>Cut once</h1>
        </div>
      </div>

      </section>



      </>
     );
}
 
export default Home;