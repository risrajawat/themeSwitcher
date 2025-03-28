import React from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import ThemeSwitch from './components/ThemeSwitch';

const App = () => {
  return (
    <div className='ap'>
      <ThemeProvider>
        <ThemeSwitch/>
      </ThemeProvider>
      
    </div>
  )
}

export default App;