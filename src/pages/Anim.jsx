import React, { useEffect, useRef } from "react";
import "./Anim.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import team1 from '../img/Team_Dylan___Mobile.png';
import team2 from '../img/Team_Katie.png';
import team3 from '../img/Team_Keith.png';

gsap.registerPlugin(ScrollTrigger);

const Anim = () => {
  const racesRef = useRef(null);

  useEffect(() => {
    const races = racesRef.current;
    if (!races) return; // safety check

    const getScrollAmount = () => {
      let racesWidth = races.scrollWidth;
      return -(racesWidth - window.innerWidth);
    };

    const tween = gsap.to(races, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
    });

  ScrollTrigger.create({
  trigger:".racesWrapper",
  start:"top 100%",
  end: () => `+=${getScrollAmount() * -1}`,
  pin:true,
  animation:tween,
  scrub:4,
  invalidateOnRefresh:true,
  markers:false
})
    // cleanup
    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <div className="racesWrapper">
      <div className="races" ref={racesRef}>
        {/* Your items go here */}
        <div className="item h_ani1">Intentionally small</div>
        <div className="item h_ani1">Ininetely cabable</div>
        <div className="item">
            <img src={team1} alt="team1" />
            <img src={team2} alt="team1" />
            <img src={team3} alt="team1" />
        </div>
        
      </div>
    </div>
  );
};

export default Anim;
