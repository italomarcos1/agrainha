import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 10px 5px;
  width: 29%;
  margin-right: ${({ index }) => (index % 2 === 0 ? 10 : 0)}px;
  margin-left: ${({ index }) => (index % 2 === 0 ? 10 : 0)}px;
  height: 100px;
  position: relative;
`;

export const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 10px;
  height: 100px;
  position: relative;
`;

export const DarkLayer = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  /* width: 33%; */
  width: 100%;
  border-radius: 10px;
  height: 100px;
`;

export const Name = styled.strong`
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  font-weight: normal;
  text-align: center;
  position: absolute;
  font-family: 'SFPro';
`;
