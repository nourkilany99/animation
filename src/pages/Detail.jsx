import React from 'react';
import './Detail.css';
import Nav from '../components/Nav.jsx';
import TacoParty from "../components/TacoParty";
import myVideo from '../video/TP-Icons-opt.mp4';
import myVideo2 from '../video/TacoParty-Desktop-15sec-opt.mp4';


const Detail = () => {
    return (<>
    <div className='hero_sub'>
       <Nav />
    </div>   

    <div className='sub_s2'>

        <div className='d1_s2_p2'>
            <p>Q3 -- 2019</p>
            <p>View site</p>
        </div>

        <p className='taco_h'>Taco party</p>

        <div className='cntnt_s2_p2'>
            <p className='cntnall1'>Josh Niernberg brought us in as creative partners to help bring his fast casual restaurant concept in Grand Junction, Colorado to life. He had a solid foundation for the restaurant—and a rad name—but it needed a visual identity. So we pulled inspiration from Taco Party’s modular approach to their menu, applied a desertscape motif, and got the party started.</p>
            <p className='cntnall1'>How We Did<br/>Our brand strategy and identity system, paired with their incredibly delicious tacos, made Taco Party one of the most successful restaurants in Grand Junction. Taco Party grew their footprint 3x since the brand launch. Today, they’re in talks to expand into new markets, and continue their plot for world taco domination.</p>
        </div>


         <TacoParty />


         <div className='s4_p2'>
            <p>Brand Identity</p>
            <p className='h'>The best parties are the ones where you have no idea what will happen next. So we created a brand that did just that. We took inspiration from the DADA movement to develop a dynamic visual identity system that was reinforced with irreverent illustrations and an expressive design language. Needless to say we got weird with it, which got customers to drop their jaws, and then we filled them with tacos.</p>
         </div>


        <video width="800" autoPlay loop muted className='video'>
            <source src={myVideo} type="video/mp4" />
        </video>

        <TacoParty />
        <TacoParty />

        <div className='s4_p2'>
            <p>Website Design</p>
            <p className='h'>The current website is the second iteration that we've designed and developed for Taco Party. For this update we were tasked with delivering a site that was easily updatable by their internal team, allowed for secure online ordering, housed a menu that gets projected in their physical space, and presented a few easter eggs like animations and playlists.</p>
        </div>


        <video width="800" autoPlay loop muted className='video'>
            <source src={myVideo2} type="video/mp4" />
        </video>

    </div>
     </>);
}
 
export default Detail;