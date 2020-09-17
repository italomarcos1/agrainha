import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 51px;
  background-color: #fff;
  width: 100%;
`;

export const Item = styled(Link)`
  height: 51px;
  width: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ active }) => (active ? '#A4B91D' : '#fff')};
`;
