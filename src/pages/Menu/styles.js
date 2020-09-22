import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
`;

export const Header = styled.div`
  width: 100%;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  background-color: #a4b91d;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;

  button {
    background: none;
    border: none;
  }
`;

export const SubHeader = styled.div`
  width: 100%;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  background-color: #a4b91d;

  text-align: left;
  font-family: 'SFPro';
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0px;
  color: #ffffff;
  margin-top: 51px;
`;

export const Item = styled.button.attrs({
  type: 'button',
})`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: ${({ isOpen }) => (isOpen ? 'flex-start' : 'space-between')};
  padding: 0 20px;
  background-color: ${({ isOpen }) => (isOpen ? '#a4b91d' : '#fff')};
  text-align: left;
  font-family: 'SFPro';
  font-size: 19px;
  line-height: 22px;
  color: ${({ isOpen }) => (isOpen ? '#fff' : '#393939')};
  border-bottom: 2px solid #eee;
`;
