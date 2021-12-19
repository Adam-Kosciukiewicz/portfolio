import React, { useState, useEffect } from "react";

import '../styles/resume.sass'

const Resume = () => {
    const [calculatedHeight, setcalculatedHeight] = useState(100)
    const [calculatedWidth, setCalculatedWidth] = useState(90)

    useEffect(()=>{
        setcalculatedHeight(window.innerWidth * calculatedWidth * 0.01 * 1.414516129032258)
    },[calculatedWidth])

    return (
        <div className="resume-container">
            <div 
                style={{
                    height:`${calculatedHeight}px`,
                    width: `${window.innerWidth * calculatedWidth * 0.01}px`,
                }}
                className={`resume-wrapper ${calculatedWidth === 90 ? 'z-in' : 'z-out'}`}
            >
                <div className='left'></div>
    

                <div className='right'>
                    <div className='section'>
                        <div className="tile">Umiejętności</div>
                    </div>

                    <div className='section'>
                        <div className="tile">Doświadczenie zawodowe</div>
                    </div>

                    <div className='section'>
                        <div className="tile">Wykształcenie</div>
                    </div>
                </div>
            </div>
            <div 
                onClick={() => setCalculatedWidth( calculatedWidth === 90 ? 50 : 90)}
                className="button" 
            >{calculatedWidth === 90 ? 'Oddal' : 'Przybliż'}</div>
        </div>
    )
}

export default Resume