import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BasicMain, BasicContent } from '../../styles/generals.styles';

export const OrderCardMain = styled(BasicMain)`
`;

export const OrderCardContent = styled(BasicContent)`
  align-content: center;
  `;

export const OrdCard = styled.div`
  background-color: ${(props) => props.theme.orderCard.ordCard.background};
  /* color: ${(props) => props.theme.orderCard.ordCard.color}; */
  /* width: 500px; */
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 4fr;
  /* gap: 12px; */
  border-radius: 8px;

  p {
      padding: 12px;
      margin: 8px 4px;
      background-color: ${(props) => props.theme.orderCard.p.background};
      color: ${(props) => props.theme.orderCard.p.color};
      border-radius: 8px;
    }

    button {
      padding: 12px;
      margin: 8px 4px;
      background-color: ${(props) => props.theme.orderCard.button.background};
      color: ${(props) => props.theme.orderCard.button.color};
      border-radius: 8px;
      border: 0 solid;
      cursor: pointer;
    }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
  text-align: center;
`;
