import React from 'react';
import Switch from 'react-switch';
import styled from 'styled-components';
// import Context from '../context/context';
import { useDispatch, useSelector } from 'react-redux';
import { toglleTheme } from '../redux/reduces/themReduce';

const SwitchStyle = styled(Switch)`
  position: absolute;
  /* top: 60px; */
  margin-right: 20px;
  `;

const Div = styled.div`
  text-align: right;
  /* background-color: red; */
  /* height: 50px; */
  top: 20px;
  right: 0;
  position: fixed;
`;

function Switcher() {
  //   const { theme, changeTheme } = useContext(Context);
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
        //   offColor={ changeThemeButton.background }
        //   onColor={ changeThemeButton.background }
        //   onHandleColor={ changeThemeButton.color }
        //   offHandleColor={ changeThemeButton.color }
      />
    </Div>
  );
}

export default Switcher;
