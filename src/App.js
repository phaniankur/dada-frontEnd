import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Box from './Components/Library/Box';
import theme from './Components/Library/theme';
import DaySale from './Pages/daySale';

function App() {
  return (

    <ThemeProvider theme={theme}>
      <Box>
        <DaySale/>
      </Box>

    </ThemeProvider>

  );
}

export default App;
