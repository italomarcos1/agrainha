import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 51px;
  background-color: #fff;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 0 13px;
`;

export const Item = styled(Link)`
  height: 51px;
  width: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ active }) => (active ? '#A4B91D' : '#fff')};
`;

export const Badge = styled.span`
  top: 16.5%;
  right: 3%;
  background-color: #4d4f53;
  position: absolute;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  /* border: 0.5px solid #f0f0f0; */
  font-family: 'SFProBold';
  font-size: 10px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0px;
  color: #fefffe;
`;
