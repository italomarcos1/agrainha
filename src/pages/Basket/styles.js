import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  flex: 1;
  background-color: #f2f2f2;
  padding: 13px;
  padding-bottom: 120px;
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

export const PriceInfo = styled.span`
  display: flex;
  width: 100%;
  height: 30px;

  margin-top: 14px;

  b {
    text-align: right;
    font-family: 'SFProBold';
    font-size: 13px;
    line-height: 22px;
    letter-spacing: 0px;
    color: #393939;
    /* background-color: #f5307b; */
    width: 65%;
  }

  p {
    width: 35%;
    text-align: right;
    font-family: 'SFPro';
    font-size: 25px;
    line-height: 22px;
    letter-spacing: 0px;
    padding-right: 7px;
    /* background-color: #05307b; */
    color: #393939;
    color: ${({ price }) => (price ? '#12B118' : '#393939')};
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

export const DiscountCoupon = styled.div`
  width: 100%;
  height: 67px;
  margin-top: 26px;

  strong {
    text-align: left;
    font-family: 'SFProBold';
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 0px;
    color: ${({ error }) => (error ? '#f53030' : '#393939')};
  }

  div {
    display: flex;

    input {
      width: 62%;
      height: 42px;
      margin-top: 7px;
      background-color: #fff;
      border: 1px solid #e0e0e0;
      border-color: ${({ error }) => (error ? '#f53030' : '#e0e0e0')};
      border-width: ${({ error }) => (error ? 2 : 1)}px;
      border-radius: 4px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      padding: 12px;
      text-align: left;
      font-family: 'SFPro';
      font-size: 18px;
      line-height: 18px;
      letter-spacing: 0px;
      color: #707070;

      &::placeholder {
        color: ${({ error }) => (error ? '#f53030' : '#666')};
        font-size: 18px;
        line-height: 18px;
      }
    }

    button {
      width: 38%;
      height: 42px;
      background: #12b118;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 7px;
      text-align: left;
      font-family: 'SFPro';
      font-size: 18px;
      line-height: 44px;
      letter-spacing: 0px;
      color: #ffffff;
    }
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

  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
`;
