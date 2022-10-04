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
    width: 200px;
  }
  p {
    margin-bottom: 4px;
  }
`;

export const Button = styled.button`
  background: ${(props) => props.theme.checkoutDetails.button.background};
  color: ${(props) => props.theme.checkoutDetails.button.color};
  /* background-color: red; */
  padding: 0 20px;
  border-radius: 8px;
  cursor: pointer;
`;

export const LabelAdd = styled.label`
  input {
    width: 400px;
  }
`;
