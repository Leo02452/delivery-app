import styled from 'styled-components';
import { BasicMain, BasicContent } from '../../styles/generals.styles';

export const CheckProdMain = styled(BasicMain)`
  background-color: ${(props) => props.theme.general.background};

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
  background-color: ${(props) => props.theme.general.background};
`;

export const Table = styled.table`
  text-align: center;
  /* border: 1px solid black; */
th {
  background-color: ${(props) => props.theme.checkoutProducts.background};
  /* background-color: red; */
  padding: 12px;
  border-radius: 4px;
  color: ${(props) => props.theme.checkoutProducts.color};
}
td {
  padding: 8px;
  border-radius: 4px;
}
tr:nth-child(even) {
  background-color: ${(props) => props.theme.checkoutProducts.table.even};
}
tr:nth-child(odd) {
  background-color: ${(props) => props.theme.checkoutProducts.table.odd};
}
button {
  color: red;
  cursor: pointer;
  padding: 4px;
  border-radius: 100%;
  border: 1px solid red;
}
`;
