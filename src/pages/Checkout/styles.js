import styled from 'styled-components';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

export const Container = styled(Form)`
  width: 100%;
  flex: 1;
  background-color: #fff;
  padding: 17px 15px;
  margin-bottom: 20px;
  padding-bottom: 120px;
`;

export const CheckoutButton = styled(Link)`
  height: 67px;
  background: #12b118 0% 0% no-repeat padding-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-family: 'SFProSemiBold';
  font-size: 20px;
  line-height: 22px;
  letter-spacing: 0px;
  color: #fefffe;
  margin-top: 35px;
  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
`;
