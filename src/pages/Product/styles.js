import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: #f5f5f5;
  margin-top: 51px;
  position: relative;
`;

export const BreadCrumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  height: 41px;
  width: 100%;
  padding-left: 13px;

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
  margin-top: 50px;

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
  top: 17.5%;
  left: 85%;
  background: none;
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
      padding-left: 0;
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
    justify-content: space-between;
    width: 50%;
    height: 100%;
    background-color: #a4b91d;
    border-radius: 4px;
    text-align: left;
    font-family: 'SFPro';
    font-size: 12px;
    letter-spacing: 0px;
    color: #fff;
    /* padding-left: 18px; */
    padding: 0 9px;

    img {
      /* margin-right: 7px; */
      width: 16%;
    }
  }
`;

export const DetailsTitle = styled.button.attrs({
  type: 'button',
})`
  width: 100%;
  height: 43px;
  background-color: #f2f2f2;
  padding: 12px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.1px solid #494949;
  border-bottom: 0.1px solid #494949;

  img {
    width: 6%;
  }
`;

export const Details = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  background-color: #f2f2f2;
  width: 100%;
  border-radius: 4px;
  padding: 15px;
  padding-top: 0;
  text-align: left;
  letter-spacing: 0px;
  color: #393939;
  font-size: 12px;
  line-height: 22px;
`;
