import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 67px;
  margin-top: 20px;

  div {
    margin-top: 7px;
    display: flex;
    width: 100%;
    height: 42px;

    input {
      -webkit-appearance: none;

      width: 65%;
      height: 42px;
      background-color: #fff;
      border: 1px solid #e0e0e0;
      border-color: ${({ error }) => (error ? '#f53030' : '#e0e0e0')};
      border-width: ${({ error }) => (error ? 2 : 1)}px;
      border-radius: 4px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-left-width: ${({ error }) => (error ? 0 : 1)}px;
      padding: 12px;
      text-align: left;
      font-family: 'SFPro';
      font-size: 18px;
      line-height: 18px;
      letter-spacing: 0px;
      color: #707070;

      &::placeholder {
        color: ${({ error }) => (error ? '#f53030' : '#666')};
      }
    }
  }
`;

export const Title = styled.small`
  text-align: left;
  font-family: 'SFProBold';
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0px;
  color: ${({ error }) => (error ? '#f53030' : '#393939')};
`;
