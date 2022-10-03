import styled from 'styled-components';
import { BasicMain, BasicContent } from '../../styles/generals.styles';

export const CheckoutMain = styled(BasicMain)`
  background-color: ${(props) => props.theme.general.background};
  /* background-color: yellow; */
  padding: 0;
`;

export const CheckoutContent = styled(BasicContent)`
  /* background-color: green; */
`;
