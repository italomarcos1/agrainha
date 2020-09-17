import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 47.37%;
  height: 360px;
  /* background-color: #fff; */
  background-color: ${({ lastItem }) => (lastItem ? '#f0f' : '#fff')};
  border-radius: 4px;
  opacity: ${({ lastItem }) => (lastItem ? 0 : 1)};
  margin-bottom: 20px;
  margin-right: ${({ index }) => (index % 2 === 0 ? '0' : '10')}px;
  margin-left: ${({ index }) => (index % 2 === 0 ? '10' : '0')}px;
  justify-content: space-between;

  img {
    width: 160px;
    height: 160px;
  }

  strong {
    color: #393939;
    font-family: 'SFPro';
    text-align: left;
    line-height: 22px;
    font-size: 15px;
    padding: 15px;
    margin: 10px 0;
  }
`;

export const Content = styled.div`
  height: 100px;
  width: 100%;
  background-color: #ff4;
`;

export const PriceContainer = styled.div`
  display: flex;
  height: 55px;
  width: 100%;
  background-color: #404;
`;

export const Options = styled.div`
  display: flex;
  height: 55px;
  width: 100%;
  background-color: #4f4;
`;
