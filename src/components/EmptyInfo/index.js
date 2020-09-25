import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const EmptyTitle = styled.h1`
  font-family: 'SFProSemiBold';
  font-size: 28px;
  line-height: 42px;
  letter-spacing: 0px;
  text-align: center;
  color: #393939;
`;

export const EmptySubtitle = styled.h2`
  font-family: 'SFPro';
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  color: #393939;
`;

export const BackToHomeScreenButton = styled(Link)`
  height: 42px;
  background: #a4b91d;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-family: 'SFPro';
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0px;
  margin-top: 26px;

  color: #ffffff;

  border-radius: 4px;
`;
