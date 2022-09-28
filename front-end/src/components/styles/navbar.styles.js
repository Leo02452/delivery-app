import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BasicMain, BasicContent, BasicButton } from '../../styles/generals.styles';

export const NavbarMain = styled(BasicMain)`
  background-color: ${(props) => props.theme.navbar.background};
  padding: 0px 0;
  justify-content: end;
  `;

export const NavbarContent = styled(BasicContent)`
  grid-template-columns: 1fr 7fr 3fr 1fr;
  /* height: 300px; */
  /* background-color: red; */
  padding: 12px;
  align-items: center;

  h3 {
    text-align: right;
  }
`;

export const NavLink = styled(Link)`
  color: ${(props) => props.theme.navbar.color};
`;

export const ButtonLogout = styled(BasicButton)`
  /* margin: 0; */
  padding: 4px;
  width: 50px;
  justify-self: end;
`;
