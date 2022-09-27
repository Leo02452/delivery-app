import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { BasicMain, BasicContent } from '../../styles/generals.styles';

export const ProductCardMain = styled(BasicMain)`
  background-color: ${(props) => props.theme.general.background};
  padding: 0px 0;
  /* flex-direction: row; */
  /* justify-content: end; */
  /* display: flex; */

  img {
    width: 150px;
    height: 200px;
    object-fit: cover;
  }
  `;

export const ProductCardContent = styled(BasicContent)`
  /* grid-template-columns: 1fr 7fr 3fr 1fr; */
  /* height: 300px; */
  /* background-color: red; */
  /* padding: 12px; */
  /* align-items: center; */
`;

// export const NavLink = styled(Link)`
//   color: ${(props) => props.theme.navbar.color};
// `;

// export const ButtonLogout = styled(BasicButton)`
//   /* margin: 0; */
//   padding: 4px;
//   width: 50px;
//   justify-self: end;
// `;
