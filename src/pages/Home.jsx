import React from "react";
import "./Home.css";
import Nav from "../components/Nav.jsx";
import hero_img from "../img/gemenini_hero.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import s3img from "../img/Screenshot 2025-11-06 at 9.26.50 PM.png";
import Anim from '../components/Anim.jsx';
import s4img from '../img/section4.png';
import ftr from '../img/footer.png';
import {Link}  from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);

const  Home= () => {












  

console.clear();

gsap.registerPlugin(ScrollTrigger);

const items = gsap.utils.toArray(".item");
const tl = gsap
  .timeline({
    defaults: {
      ease: "none",
      duration: 1
    },
    scrollTrigger: {
    trigger: '.accordion-item',
    start: 'top top',
    end: '+=1000',
    pin: true,
    scrub: true,
    invalidateOnRefresh: true,
    markers: false,
  }
  })
  .to({}, { duration: 0.15 });

items.forEach((item) => {
  const body = item.querySelector(".body");
  const hasChild = body.dataset.haschild;
  tl.to(
    body,
    {
      height: "auto"
    },
    "+=0.5"
  );
  if (hasChild) {
    const cardsContainer = body.querySelector(".cards-container");
    tl.to(
      cardsContainer,
      {
        x: cardsContainer.clientWidth - cardsContainer.scrollWidth,
        duration: 4
      },
      "+=0.35"
    );
  } else {
    const paragraphs = body.querySelectorAll("p");
    tl.to(
      paragraphs,
      {
        opacity: 1,
        stagger: 0.25
      },
      "+=0.35"
    );
  }
  tl.to(
    body,
    {
      height: 0
    },
    "+=0.5"
  );
});
tl.to({}, { duration: 0.25 });


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



      <div className="item_nn item">
      <div className="heder header">
        <h3 className="h_ani1">THE PROOF IS IN THE PUDDING</h3>
        <p className="p_ani1">A stack of stuff we’ve been working on lately.</p>
      </div>
      <div className="body" data-haschild="true">
        <div className="content">
          <div className="horizontal center">
            <div className="cards-container">
              <div className="card center gradient-green scr1" >

              </div>

              <div className="card center gradient-green scr2" >
                 
              </div>
              <div className="card center gradient-green scr3">
              
              </div>

              <div className="card center gradient-green scr4" >
                 
              </div>
              <div className="card center gradient-green scr5" >
                
              </div>
              <div className="card center gradient-green scr6" >
                 
              </div>

              <div className="card center gradient-green scr7" >
                
              </div>

              <div className="card center gradient-green scr8" >
                 
              </div>
              
              <div className="card center gradient-green scr8" >
                 
              </div>
              
            </div>
          </div>
        </div>
      </div>
      </div>



      <section className="s3">
        <img className="s3img" src={s3img} alt="s3img"/>
      </section>


     <Anim/>

     <section className="s4">
        <img className="s3img" src={s4img} alt="s4img"/>
      </section>

      <footer className="s4">
        <img className="s3img" src={ftr} alt="s4img"/>
      </footer>


      </>
     );
}
 
export default Home;