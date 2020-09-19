import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 10px 5px;
  width: 33%;
  height: 100px;
`;

export const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 10px;
  height: 100px;
`;

export const DarkLayer = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
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
