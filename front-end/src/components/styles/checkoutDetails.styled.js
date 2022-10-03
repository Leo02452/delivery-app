import styled from 'styled-components';
import { BasicMain, BasicContent } from '../../styles/generals.styles';

export const CheckDetailsMain = styled(BasicMain)`
  display: flex;
`;

export const CheckDetailsContent = styled(BasicContent)`
  display: flex;
  padding: 20px;
  background-color: ${(props) => props.theme.checkoutDetails.background};
  color: ${(props) => props.theme.checkoutDetails.color};
  border-radius: 8px;
  input {
    padding: 4px;
  }
  select {
    padding: 4px;
  }
  p {
    margin-bottom: 4px;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.checkoutDetails.button.background};
  padding: 0 20px;
  border-radius: 8px;
`;

export const InputAdress = styled.input`

`;
