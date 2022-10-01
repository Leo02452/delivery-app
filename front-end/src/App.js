import React from 'react';
// import './App.css';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import AppRoutes from './components/AppRoutes';
import Global from './styles/global.styles';
import light from './styles/lightTheme';
import dark from './styles/darkTheme';

function App() {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className="App">
      <ThemeProvider theme={ theme === 'light' ? dark : light }>
        <Global />
        <AppRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
