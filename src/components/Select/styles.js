import styled from 'styled-components';

import arrow from '~/assets/icons/arrow-down.svg';

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
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

  font-family: 'SFPro';
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0px;

  color: #707070;
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