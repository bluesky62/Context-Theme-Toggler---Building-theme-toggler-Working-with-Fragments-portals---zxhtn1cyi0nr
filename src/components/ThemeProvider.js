import React from 'react';

const ThemeContext = React.createContext()
const ThemeProvider = (props) =>{

    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}

export {ThemeProvider,ThemeContext}