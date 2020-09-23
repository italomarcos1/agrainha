import styled from 'styled-components';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

export const Container = styled(Form)`
  width: 100%;
  flex: 1;
  background-color: #fff;
  padding: 17px 15px;
  padding-bottom: 120px;

  select {
    background: #f2f2f2;
    box-shadow: 0px 2px 0px #00000029;
    border-radius: 4px;

    text-align: left;
    font-family: 'SFPro';
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 0px;
    color: #393939;
  }
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
