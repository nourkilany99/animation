import React from 'react';
import './Detail.css';
import Nav from '../components/Nav.jsx';
import TacoParty from "../components/TacoParty";


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
    </div>
     </>);
}
 
export default Detail;