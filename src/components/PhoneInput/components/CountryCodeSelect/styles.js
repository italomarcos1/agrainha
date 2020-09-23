import styled from 'styled-components';

import arrow from '~/assets/icons/arrow-down.svg';

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;

  display: flex;
  width: 35%;
  height: 42px;

  background: transparent;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position-x: 90%;
  background-position-y: 16px;

  border: 1px solid #e0e0e0;
  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  padding: 0;
  padding-left: 12px;

  margin-top: 0;
  font-family: 'SFPro';
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0px;

  color: #393939;
`;
