import styled from 'styled-components';

import arrow from '~/assets/icons/arrow-down.svg';

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #f2f2f2;
  margin-top: 7px;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position-x: 98%;
  height: 42px;
  background-position-y: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  width: 100%;
  display: flex;
  padding: 0;
  padding-left: 12px;
  box-shadow: 0px 2px 0px #00000029;
  text-align: left;

  font-family: 'SFPro';
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0px;

  color: #393939;
`;

export const Container = styled.div`
  width: 100%;
  height: 67px;
  margin-top: 20px;
`;

export const Title = styled.small`
  text-align: left;
  font-family: 'SFProBold';
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0px;
  color: ${({ error }) => (error ? '#f53030' : '#393939')};
`;
