import React, { useState } from "react";

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState(true);
  const [background, setbackground] = useState('bg-light');
  const [them, settheme] = useState('light');
  const [btntheme, setbtntheme] = useState('btn btn-light');
  const handleChange = (e) => {
    setTheme(!theme);
    if(theme == true) {
        setbackground('bg-dark');
        settheme('dark');
        setbtntheme('btn btn-dark')
    }else {
        setbackground('bg-light');
        settheme('light');
        setbtntheme('btn btn-light');
    }
    console.log(theme);
    console.log(background);
  };
  

  return (
    <>
      <button id="global-theme-toggler" className={btntheme} onClick={() => handleChange()}>
        Switch to {them} theme
      </button>
    </>
  );
};
export { ThemeToggleButton };
