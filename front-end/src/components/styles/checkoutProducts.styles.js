import styled from 'styled-components';
import { BasicMain, BasicContent } from '../../styles/generals.styles';

export const CheckProdMain = styled(BasicMain)`
  background-color: ${(props) => props.theme.checkoutPage.background};

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

export const CheckProdContent = styled(BasicContent)`
  background-color: ${(props) => props.theme.checkoutPage.background};
`;

export const Table = styled.table`
  text-align: center;
  /* border: 1px solid black; */
th {
  background-color: var(--p5);
  padding: 12px;
  border-radius: 4px;
}
td {
  padding: 8px;
  border-radius: 4px;
}
tr:nth-child(even) {
  background-color: var(--g3);
}
tr:nth-child(odd) {
  background-color: var(--g2);
}
button {
  color: red;
  cursor: pointer;
  padding: 4px;
  border-radius: 100%;
  border: 1px solid red;
}
`;
