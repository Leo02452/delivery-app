import React from 'react';
import Switch from 'react-switch';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { toglleTheme } from '../redux/reduces/themReduce';

const SwitchStyle = styled(Switch)`
  position: absolute;
  margin-right: 20px;
  `;

const Div = styled.div`
  text-align: right;
  top: 20px;
  right: 0;
  position: fixed;
`;

function Switcher() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  return (
    <Div>
      <SwitchStyle
        onChange={ () => dispatch(toglleTheme()) }
        checked={ theme === 'light' }
        checkedIcon={ false }
        uncheckedIcon={ false }
        height={ 12 }
        width={ 32 }
        handleDiameter={ 16 }
        offColor="#666666"
        onColor="#444444"
        onHandleColor="#999999"
        offHandleColor="#000000"
      />
    </Div>
  );
}

export default Switcher;
