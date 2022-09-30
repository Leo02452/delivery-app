import { render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Global from '../../styles/global.styles';
import light from '../../styles/lightTheme';

const renderWithrouter = (component) => ({
  ...render(
    <BrowserRouter>
      <ThemeProvider theme={ light }>
        <Global />
        { component }
      </ThemeProvider>
    </BrowserRouter>,
  ),
});

export default renderWithrouter;
