import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import theme from './Components/Library/theme';
import Dashboard from './Pages/dashboard';
import DaySale from './Pages/daySale';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route exact path="/" element={<DaySale/>}/>
        </Routes>
    </ThemeProvider>
  );
}

export default App;
