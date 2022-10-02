import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { BasicMain } from '../../styles/generals.styles';

export const ProductCardMain = styled(BasicMain)`
  background-color: ${(props) => props.theme.productCard.background};
  padding: 0px 0;
  width: 200px;
  padding-bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* box-shadow: 1px 4px 7px 0px rgba(0,0,0,0.6); */
  box-shadow: ${(props) => props.theme.productCard.shadow};
  border-radius: 8px;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }
  `;

export const Price = styled.span`
  background-color: black;
  color: white;
  padding: 4px 16px;
  border-radius: 0 8px 8px 0;
  position: absolute;
  top: 8px;
  left: 0;
`;

export const Title = styled.span`
  font-weight: 600;
  padding: 8px;
  font-size: 12px;
`;

export const ButtonPlusMinus = styled.button`
  background: ${(props) => props.theme.productCard.button.background};
  color: ${(props) => props.theme.productCard.button.color};
  border: 1px solid;
  border-color: ${(props) => props.theme.productCard.button.border};
  padding: 4px;
  border-radius: 100%;
  width: 24px;
  height: 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

export const Quantity = styled.div`
  display: flex;
  input {
    width: 100px;
    padding: 4px 0 4px 20px;
    text-align: center;
    border-radius: 8px;
    border: 1px solid;
  }
`;
