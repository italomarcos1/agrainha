import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  padding: 13px;
  margin-top: 51px;
`;

export const Header = styled.div`
  width: 100%;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 16px;
  background-color: #fff;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;

  text-align: left;
  font-family: 'SFPro';
  font-size: 20px;
  line-height: 22px;
  letter-spacing: 0px;
  color: #393939;

  a {
    margin-right: 11px;
  }
`;

export const Warning = styled.div`
  height: 147px;
  background: #fff;
  border: 1px solid #f84c4c;
  border-radius: 6px;
  padding: 17px 16px;
  text-align: left;
  font-family: 'SFPro';
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0px;
  color: #f84c4c;
`;

export const ShippingWarning = styled.div`
  background: #e2edfd;
  border: 1px solid #5b94d6;
  border-radius: 6px;
  margin-top: 15px;
  margin-bottom: 10px;
  padding: 17px 16px;

  text-align: left;
  font-family: 'SFPro';
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0px;
  color: #5b94d6;
`;

export const ItemsList = styled.ul`
  display: flex;
  flex: 1;
  margin-top: 51px;
  flex-direction: column;
  /* background-color: #f2f202; */
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
