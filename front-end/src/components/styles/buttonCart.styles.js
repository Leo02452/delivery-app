import styled from 'styled-components';
import { BasicMain, BasicButton } from '../../styles/generals.styles';

export const ButtonMain = styled(BasicMain)`
  background-color: ${(props) => props.theme.productCard.background};
  margin: 0;
  padding: 0;
  position: fixed;
  right: 12px;
  bottom: 12px;
  `;

export const Button = styled(BasicButton)`
  background: ${(props) => props.theme.buttonCard.background};
  color: ${(props) => props.theme.buttonCard.color};
  border: 1px solid;
  border-color: ${(props) => props.theme.buttonCard.borderColor};
  /* font-size: 20px; */
  margin: 0;
  width: 150px;
  padding: 12px 20px;
  text-align: right;
  cursor: pointer;
`;
