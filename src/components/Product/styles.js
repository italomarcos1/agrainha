import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 47.37%; */
  /* width: 41.66%; */
  width: 45.82%;
  height: 370px;
  background-color: #fff;
  /* background-color: ${({ lastItem }) => (lastItem ? '#f0f' : '#fff')}; */
  border-radius: 4px;
  /* opacity: ${({ lastItem }) => (lastItem ? 0 : 1)}; */
  margin-bottom: 20px;
  margin-right: ${({ index }) => (index % 2 === 0 ? '0' : '10')}px;
  margin-left: ${({ index }) => (index % 2 === 0 ? '10' : '0')}px;
  justify-content: space-between;
  font-family: 'SFPro';

  > strong {
    color: #393939;
    font-family: 'SFProLight';
    line-height: 22px;
    font-size: 15px;
    padding: 0 5px;
    margin: 10px 0;
    height: 70px;
    background-color: #ff4;
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

  background-color: #404;

  span {
    padding: 0;
    display: flex;
    color: #e2a63b;
    font-size: 7.5px;
    align-items: center;
    background-color: #4f4;

    strong {
      font-size: 8px;
    }
  }

  small {
    color: #989898;
    text-align: left;
    font-size: 10px;
    line-height: 22px;

    p {
      margin-left: 3;
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
  background-color: #4f4;
  align-items: center;
  justify-content: space-between;
  padding-left: 2px;
  padding-right: 5px;
  margin-top: 10px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 63%;

    strong {
      font-size: 18px;
      color: #393939;
      margin: 0 5px;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      /* width: 41.8%; */
      /* height: 35px; */
      flex: 1;
      padding: 15px;
      /* height: 100%; */
      background-color: #f2f2f2;
      border-radius: 50%;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35%;
    height: 100%;

    /* width: 45px; */
    /* height: 45px; */
    background-color: #a4b91d;
    border-radius: 4px;
  }
`;
