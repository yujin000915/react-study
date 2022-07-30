import React from 'react';

// Style
import '../css/style.min.css'; 

// Img
import sec01 from '../img/sec01.jpg'
import secApply from '../img/sec_apply.jpg'
import sec02 from '../img/sec02.jpg'

function Landing() {
    return (
        <div>
            <div className="sec01">
                <img src={sec01}/>
            </div>

            <div className="secApply">
                <img src={secApply}/>
            </div>

            <div className="sec02">
                <img src={sec02}/>
            </div>
        </div>
    ) 
}

export default Landing;