import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: #f5f5f5;
  margin-top: 51px;
`;

export const BreadCrumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  height: 41px;
  width: 100%;
  padding-left: 16px;

  text-align: left;
  font-family: 'SFPro';
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0px;
  color: #393939;
  opacity: 1;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  flex: 1;
  padding: 0 16px 20px;
`;

export const ProductTitle = styled.strong`
  text-align: left;
  font-family: 'SFProBold';
  font-size: 22px;
  line-height: 30px;
  letter-spacing: 0px;
  margin: 12px 0;
  color: #000000;
`;

export const ProductShipping = styled.strong`
  text-align: left;
  font-family: 'SFPro';
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0px;
  margin-bottom: 12px;
  color: #393939;

  span {
    color: #a4b91d;
  }
`;

export const ProductDescription = styled.div`
  background-color: #f2f2f2;
  border-radius: 4px;
  padding: 7px 9px;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 70px;
  width: 100%;
  padding: 0;
  font-family: 'SFPro';
  margin-top: 10px;

  /* background-color: #404; */

  span {
    padding: 0;
    display: flex;
    color: #e2a63b;
    font-size: 15px;
    line-height: 22px;
    height: 22px;
    align-items: center;
    /* background-color: #4f4; */

    strong {
      font-size: 15px;
      font-family: 'SFProSemibold';
      margin-right: 5px;
    }
  }

  div {
    margin-top: 22px;
    margin-bottom: 22px;

    small {
      color: #989898;
      text-align: left;
      font-size: 15px;
      line-height: 22px;
      margin: 4px 0;

      p {
        margin-left: 5;
        display: inline;
        text-decoration: line-through;
      }
    }

    > strong {
      color: #393939;
      text-align: left;
      font-size: 30px;
      line-height: 22px;
      margin-right: 14px;
      font-family: 'SFProSemiBold';
    }
  }
`;

export const FavoriteButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  margin: 20px 20px 0px 0px;
  left: 87.5%;
  background: none;
`;

export const Amount = styled.strong`
  text-align: left;
  font-family: 'SFProBold';
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0px;
  color: #393939;
  margin: 25px 0 7px;
`;

export const Options = styled.div`
  display: flex;
  height: 55px;
  width: 100%;
  /* background-color: #4f4; */
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  margin-top: 57px;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 50%;
    height: 100%;
    /* background-color: #404; */

    strong {
      font-size: 18px;
      color: #393939;
      margin: 0 20px;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 25%;
      /* padding: 10px; */
      padding-left: 0;
      /* padding-right: 0; */
      /* padding: 0; */
      height: 100%;
      background-color: #f2f2f2;

      img {
        width: 35%;
        margin: 0 auto;
      }
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    background-color: #a4b91d;
    border-radius: 4px;
    text-align: left;
    font-family: 'SFPro';
    font-size: 13px;
    line-height: 22px;
    letter-spacing: 0px;
    color: #fff;
    padding-left: 18px;

    img {
      margin-right: 7px;
      width: 20%;
    }
  }
`;

export const Details = styled.button.attrs({
  type: 'button',
})`
  width: 100%;
  height: 43px;
  background-color: #f7f9ec;
  padding: 12px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #494949;
  border-bottom: 1px solid #494949;
`;
