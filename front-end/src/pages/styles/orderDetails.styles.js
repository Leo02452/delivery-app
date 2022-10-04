import styled from 'styled-components';
import { BasicMain, BasicContent } from '../../styles/generals.styles';

export const OrderDetailsMain = styled(BasicMain)`
`;

export const OrderDetailsContent = styled(BasicContent)`
  padding-top: 60px;

  span {
  background: ${(props) => props.theme.buttonCard.background};
  color: ${(props) => props.theme.buttonCard.color};
  border: 1px solid;
  border-color: ${(props) => props.theme.buttonCard.borderColor};
  opacity: ${(props) => props.disabled && opacityValue};
  margin: 0;
  width: 150px;
  padding: 12px 20px;
  /* text-align: right; */
  border-radius: 4px;
  font-weight: 600;
  }
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 2fr 3fr;

  p {
    background-color: red;
    padding: 4px;
    margin: 4px;
    text-align: center;
    background-color: ${(props) => props.theme.orderDetails.details.background};
    color: ${(props) => props.theme.orderDetails.details.color};
    border-radius: 4px;
  }
`;
