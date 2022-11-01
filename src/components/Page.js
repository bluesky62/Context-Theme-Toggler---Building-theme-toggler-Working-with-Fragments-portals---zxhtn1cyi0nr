import React from 'react';
import { LocalThemedBox } from './LocalThemedBox';
import { ThemeContext } from './ThemeProvider';
import { useContext } from 'react';

const Page = () => {
     const background = useContext(ThemeContext)
     console.log(background)
   
    const handalClick = () => {
      alert("adsfadf")
    }
   
    return(
        <div className={`container ${background}`}id="themed-page">
            <p id="themed-text-container">
                lorem ipsum dolor iterit n stuff
            </p>
            <button className="btn" id="themed-button" onClick={() => handalClick()}>Themed Button</button>
            <LocalThemedBox />
        </div>
    )
}

export { Page }