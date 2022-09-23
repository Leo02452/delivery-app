import styled from 'styled-components';
import { BasicMain, BasicContent, BasicButton } from '../../styles/generals.styles';

const disableValueButton = 0.3;

export const MainRegister = styled(BasicMain)`
  background-color: ${(props) => props.theme.general.background};
  height: 100vh;
  display: flex;
  align-content: center;
  align-items: center;
`;

export const ContentRegister = styled(BasicContent)`
  color: ${(props) => props.theme.general.color};
  padding: 8px;
  justify-content: center;
`;

export const Form = styled.form`
  background-color: ${(props) => props.theme.register.formBackground};
  border: 1px solid;
  border-color: ${(props) => props.theme.register.formBorder};
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

export const ButtonRegister = styled(BasicButton)`
  background-color: ${(props) => props.theme.register.buttonRegisterBackground};
  color: ${(props) => props.theme.register.buttonRegisterTextColor};
  border-color: ${(props) => props.theme.register.buttonRegisterBorderColor};
  opacity: ${(props) => props.disabled && disableValueButton};
  cursor: pointer;
`;
