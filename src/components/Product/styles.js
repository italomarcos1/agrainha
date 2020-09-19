import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 45.82%;
  height: 370px;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 20px;
  justify-content: space-between;
  font-family: 'SFPro';

  div {
    &.content {
      color: #393939;
      font-family: 'SFProLight';
      line-height: 22px;
      font-size: 15px;
      padding: 0 5px;
      margin: 10px 0;
      height: 70px;
      width: 100%;

      overflow: hidden;
      text-overflow: ellipsis;
      /* background-color: #ff4; */
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;

  width: 100%;

  img {
    width: 93.75%;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 65px;
  width: 100%;
  padding: 0 5px;
  font-family: 'SFPro';

  /* background-color: #404; */

  span {
    padding: 0;
    display: flex;
    color: #e2a63b;
    font-size: 8px;
    height: 20px;
    align-items: center;
    /* background-color: #4f4; */

    strong {
      font-size: 9px;
      font-family: 'SFProSemibold';
      margin-right: 1px;
    }
  }

  small {
    color: #989898;
    text-align: left;
    font-size: 12px;
    line-height: 22px;

    p {
      margin-left: 5;
      display: inline;
      text-decoration: line-through;
    }
  }

  > strong {
    color: #393939;
    text-align: left;
    font-size: 20px;
    line-height: 22px;
    font-family: 'SFProSemiBold';
  }
`;

export const Options = styled.div`
  display: flex;
  height: 55px;
  width: 100%;
  /* background-color: #4f4; */
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  margin-top: 10px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 65%;
    height: 100%;
    /* margin-right: 12px; */

    strong {
      font-size: 18px;
      color: #393939;
      margin: 0 10px;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      padding: 10px;
      height: 100%;
      background-color: #f2f2f2;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 100%;

    /* width: 45px; */
    /* height: 45px; */
    background-color: #a4b91d;
    border-radius: 4px;
  }
`;
