import styled from 'styled-components';
import { BasicContent, BasicMain } from '../../styles/generals.styles';

export const MainLoginPage = styled(BasicMain)`
  background-color: ${(props) => props.theme.general.background};
  height: 100vh;
  display: flex;
  align-content: center;
  align-items: center;
`;

export const ContentLoginPage = styled(BasicContent)`
  color: ${(props) => props.theme.general.color};
  padding: 8px;
  justify-content: center;
  `;

export const Form = styled.form`
  background-color: ${(props) => props.theme.loginLight.formBackground};
  border: 1px solid;
  border-color: ${(props) => props.theme.loginLight.formBorder};
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 4px;
  
  span {
    padding-bottom: 8px;
  }

  input {
    width: 300px;
    padding: 8px;
    margin-bottom: 12px;
  }
  `;

export const ButtonLogin = styled.button`
  background-color: ${(props) => props.theme.loginLight.buttonLoginBackground};
  color: ${(props) => props.theme.loginLight.buttonLoginTextColor};
  border: 1px solid;
  border-color: ${(props) => props.theme.loginLight.buttonLoginBorderColor};
  padding: 12px;
  border-radius: 4px;
  margin: 12px 0;
  font-weight: 600;
`;

export const ButtonCreate = styled.button`
  background-color: ${(props) => props.theme.loginLight.buttonCreateBackground};
  color: ${(props) => props.theme.loginLight.buttonCreateTextColor};
  border: 1px solid;
  border-color: ${(props) => props.theme.loginLight.buttonCreateBorderColor};
  padding: 12px;
  border-radius: 4px;
  margin: 12px 0;
  font-weight: 600;
`;
