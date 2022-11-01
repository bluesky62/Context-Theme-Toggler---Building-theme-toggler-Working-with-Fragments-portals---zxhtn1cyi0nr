import { useState } from "react";
import React from 'react';


const LocalThemedBox = () => {
//     // const [first] = props
    // const [dark, setdark] = useState('btn btn-dark');
    
    // const handleClick = () => {
    //     setdark('btn btn-light');
    // }

return(
    <div style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box">
        {/* Write code below this line */}
        <p id='local-themed-text-container' className='txt-light'>this is the local container text</p>
        
        <button id='themed-button' className="btn btn-dark" >Toggle local theme to</button>
        
    </div>
)
}

export { LocalThemedBox }