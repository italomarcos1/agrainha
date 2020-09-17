import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #404;
`;

export const SearchBar = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
  background-color: #a4b91d;
  padding: 5px;

  div {
    width: 100%;
    display: flex;
    height: 41px;
    background-color: #fff;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    input {
      font-family: 'SFPro';
      font-size: 16px;
      flex: 1;
      height: 31px;
      padding: 5px;
      color: #989898;

      &::placeholder {
        color: #989898;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 31px;
      height: 31px;
      margin-left: 10px;
      background: none;
      border: none;
    }
  }
`;
