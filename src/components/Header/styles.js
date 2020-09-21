import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 51px;
  background-color: #fff;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Item = styled(Link)`
  height: 51px;
  width: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ active }) => (active ? '#A4B91D' : '#fff')};
`;
