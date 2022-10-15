import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from '../../redux/store';
import Global from '../../styles/global.styles';
import light from '../../styles/lightTheme';

const renderWithrouter = (component) => ({
  ...render(
    <BrowserRouter>
      <Provider store={ store }>
        <ThemeProvider theme={ light }>
          <Global />
          {component}
        </ThemeProvider>
      </Provider>
    </BrowserRouter>,
  ),
});

export default renderWithrouter;
