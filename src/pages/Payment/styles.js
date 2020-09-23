import styled from 'styled-components';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

export const Container = styled(Form)`
  width: 100%;
  /* height: 100%; */
  flex: 1;
  background-color: #fff;
  padding: 17px;
  margin-bottom: 20px;
  padding-bottom: 120px;

  > h1 {
    text-align: left;
    font-family: 'SFProSemiBold';
    font-size: 22px;
    line-height: 22px;
    color: #000000;
    letter-spacing: 0.28px;

    opacity: 1;
  }
`;

export const Info = styled.span`
  display: flex;
  width: 100%;
  height: ${({ custom }) => (custom ? 62 : 18)}px;

  margin-top: 14px;

  b {
    text-align: left;
    font-family: 'SFProBold';
    font-size: 13px;
    line-height: 22px;
    letter-spacing: 0px;
    color: #393939;
    /* background-color: #f5307b; */
    width: 32.5%;
    padding-right: 20px;
  }

  p {
    width: 67.5%;
    text-align: left;
    font-family: 'SFPro';
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 0px;
    /* background-color: #05307b; */
    color: #393939;
  }
`;

export const PriceInfo = styled.span`
  display: flex;
  width: 100%;
  height: 30px;

  margin-top: 14px;

  b {
    text-align: right;
    font-family: 'SFProSemiBold';
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

export const ItemsList = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 10px;
  background-color: #fff;
`;

export const ChangeInformationButton = styled(Link)`
  height: 42px;
  background: #a4b91d;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-family: 'SFPro';
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0px;
  margin-top: 26px;

  color: #ffffff;

  border-radius: 4px;
`;

export const Warning = styled.div`
  height: 147px;
  background: #fff;
  border: 1px solid #f84c4c;
  border-radius: 6px;
  margin-top: 26px;
  padding: 17px 16px;
  text-align: left;
  font-family: 'SFPro';
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0px;
  color: #f84c4c;
`;
