import styled from 'styled-components';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

export const Container = styled(Form)`
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: #fff;
  padding: 17px 15px;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;

  button {
    background: none;
    border: none;
  }
`;

export const SubHeader = styled.div`
  width: 100%;
  height: 59px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-around;
  padding-left: 12.5px;
  background-color: #a4b91d;
  margin-top: 51px;
`;

export const Line = styled.hr`
  color: #fff;
  width: 80%;
  height: 1px;
  border: 1px solid #fff;
  /* margin: 10.5px auto 8.5px; */
  position: absolute;
  top: 37px;
  left: 12px;
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 39px;
  z-index: 2;
`;

export const OptionTitle = styled.strong`
  text-align: center;
  font-family: 'SFPro';
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0px;
  color: #fff;
  opacity: 1;
  height: 14px;
`;

export const OptionNumber = styled.div`
  width: 22px;
  height: 22px;
  background-color: ${({ active }) => (active ? '#fff' : '#a4b91d')};
  border-radius: 50%;
  border: 2px solid #fff;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'SFProBold';
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0px;
  color: ${({ active }) => (active ? '#a4b91d' : '#fff')};
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

  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
`;
