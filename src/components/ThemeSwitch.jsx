import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const ThemeSwitch = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <div style={{backgroundColor: theme == "Light" ? "white" : "#111", height: "50vh", width: "90vh"}}>
    <h1 style={{color: "green"}}>Theme Switcher App</h1>
    <br />
    <br />
    <button onClick={toggleTheme}>change theme</button>
    <br />
    <br />
    <p style={{color: "green"}}>Your current theme : {theme}</p>
    </div>
    
    
  )
}

export default ThemeSwitch;