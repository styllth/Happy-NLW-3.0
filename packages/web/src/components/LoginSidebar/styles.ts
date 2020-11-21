import styled from 'styled-components';

export const LoginSidebar = styled.aside`
  padding: 32px 24px;
  max-width: 30rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${props => props.theme.colors.background};

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 39px;

    font-size: 24px;
    line-height: 34px;
  }

  div span {
    text-align: center;
  }
`;
