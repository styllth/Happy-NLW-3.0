import styled from 'styled-components';

import backgroundLanding from '../../assets/images/landing.svg';

export const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg,
    ${(props) => props.theme.colors.themeColors.primary.normal} 0%,
    ${(props) => props.theme.colors.themeColors.primary.light} 100%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`position: relative;
  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  background: url(${backgroundLanding}) no-repeat 80% center;

  main{
    position:absolute;
    max-width: 350px;
    margin-top:10rem;

    h1{
      font-size: 76px;
      font-weight: 900;
      line-height: 70px;
    }

    p {
      margin-top: 40px;
      font-size: 24px;
      line-height: 34px;
    }
  }
`;

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;

  text-align: right;

  strong {
    font-weight: 800;
  }
`;

export const EnterApp = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 80px;
  height: 80px;
  border-radius: 30px;
  background: ${(props) => props.theme.colors.yellow};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: background-color 0.2s;

  &:hover{
    background: ${(props) => props.theme.colors.themeColors.primary.lighter};
  }
`;
