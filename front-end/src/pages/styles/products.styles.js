import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { BasicMain, BasicContent } from '../../styles/generals.styles';

export const ProductMain = styled(BasicMain)`
  background-color: ${(props) => props.theme.general.background};
  `;

export const ProductContent = styled(BasicContent)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
