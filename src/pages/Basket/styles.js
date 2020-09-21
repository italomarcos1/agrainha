import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  padding: 13px;
`;

export const ItemsList = styled.ul`
  display: flex;
  flex: 1;
  margin-top: 51px;
  flex-direction: column;
  /* background-color: #f2f202; */
`;

export const Item = styled.li`
  width: 100%;
  height: 162px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 6px;

  & + li {
    margin-top: 10px;
  }
`;

export const ItemPicture = styled.img`
  width: 20%;
`;

export const Title = styled.h1`
  text-align: left;
  font-family: 'SFPro';
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0px;
  color: #393939;
  opacity: 1;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  height: 70px;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
`;

export const Price = styled.strong`
  text-align: right;
  font-family: 'SFProBold';
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0px;
  color: #393939;
  align-self: flex-end;
`;

export const Separator = styled.hr`
  width: 100%;
  height: 1px;
  border: 1px solid #e0e0e0;
  margin: 10.5px auto 8.5px;
`;

export const Options = styled.div`
  display: flex;
  height: 59.5px;
  width: 100%;
  /* background-color: #4f4; */
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 36%;
    height: 100%;

    strong {
      font-size: 18px;
      color: #393939;
      font-family: 'SFPro';
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0px;
      text-align: center;
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
`;

export const DeleteItem = styled.button`
  background: #f84c4c;
  border-radius: 4px;
  opacity: 1;
  width: 13%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50%;
    margin: 0 auto;
  }
`;
