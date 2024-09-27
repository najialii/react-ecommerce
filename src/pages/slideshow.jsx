
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
// import Offer2Img from './offer2.png';

const Slideshow = () => {

    const images = [
        `/offer2.png`,
        `/offer6.png`,
        `/offer8.png`,
    ];
    return (  
       
<Slide>
            <div className="each-slide-effect h-full">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    
                </div>


            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                <div className='flex items-center space-x-2 mb-6 '>
                    </div>
                    
                </div>
            </div>  
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
            </div>
        </Slide>
    );
}
 
export default Slideshow
;