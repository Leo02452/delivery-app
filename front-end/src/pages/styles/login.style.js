import styled from 'styled-components';
import { BasicContent, BasicMain, BasicButton } from '../../styles/generals.styles';
import logoLight from '../../images/logo.png';

const disableValueButton = 0.3;

export const MainLoginPage = styled(BasicMain)`
  /* background-color: ${(props) => props.theme.general.background}; */
  height: 100vh;
  display: flex;
  align-content: center;
  align-items: center;
  background-image: url('../../images/logo.png');
  background-image: url(${logoLight});
  background-image: ${(props) => props.theme.login.logo};
  background-repeat: no-repeat;
  background-size: contain;
  /* background-position: center; */
  /* margin: auto 0; */
  /* margin-left: 5%; */

  h1 {
    font-family: 'Chewy', cursive;
    font-size: 60px;
    text-align: center;
    letter-spacing: 8px;
  }
  h2 {
    font-family: 'League Spartan', sans-serif;
    font-size: 24px;
    text-align: center;
    margin-top: 8px;
  }
`;

export const ContentLoginPage = styled(BasicContent)`
  color: ${(props) => props.theme.general.color};
  padding: 8px;
  justify-content: center;
  `;

export const Form = styled.form`
  background-color: ${(props) => props.theme.login.formBackground};
  border: 1px solid;
  border-color: ${(props) => props.theme.login.formBorder};
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 8px;
  /* position: absolute; */
  /* right: 30%; */
  /* top: 10%; */
  
  span {
    padding-bottom: 8px;
  }

  input {
    width: 300px;
    padding: 8px;
    margin-bottom: 12px;
  }
  `;

export const ButtonLogin = styled(BasicButton)`
  background-color: ${(props) => props.theme.login.buttonLoginBackground};
  color: ${(props) => props.theme.login.buttonLoginTextColor};
  border-color: ${(props) => props.theme.login.buttonLoginBorderColor};
  opacity: ${(props) => props.disabled && disableValueButton};
  cursor: pointer;
`;

export const ButtonCreate = styled(BasicButton)`
  background-color: ${(props) => props.theme.login.buttonCreateBackground};
  color: ${(props) => props.theme.login.buttonCreateTextColor};
  border-color: ${(props) => props.theme.login.buttonCreateBorderColor};
  cursor: pointer;
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
