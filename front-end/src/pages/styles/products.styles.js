import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { BasicMain, BasicContent } from '../../styles/generals.styles';

export const ProductMain = styled(BasicMain)`
  background-color: ${(props) => props.theme.general.background};
  /* padding: 0px 0; */
  /* background-color: red; */
  /* flex-direction: row; */
  /* justify-content: end; */
  /* display: flex; */

  `;

export const ProductContent = styled(BasicContent)`
  display: flex;
  flex-wrap: wrap;
/* grid-template-columns: 1fr 1fr 1fr 1fr 1fr; */
  /* height: 300px; */
  /* background-color: red; */
  /* padding: 12px; */
  /* align-items: center; */
`;
