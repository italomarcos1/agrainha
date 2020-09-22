import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 57px;
  margin-top: 20px;

  small {
    text-align: left;
    font-family: 'SFProBold';
    font-size: 15px;
    line-height: 22px;
    color: #393939;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: #6a707e;

    span {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;

      text-align: left;
      font-family: 'SFPro';
      font-size: 18px;
      line-height: 44px;
      letter-spacing: 0px;
      color: #707070;
    }
  }
`;
