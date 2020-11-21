import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
`;

export const LoginWrapper = styled.div`
  display: flex;

  p {
    color: #5c8599;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;

    margin-bottom: 30px;

    max-width: 350px;
  }
`;

export const LoginCard = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem;

  .input-block + .input-block {
    margin-top: 24px;
  }

  .input-block label {
    display: flex;
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;
  }

  .input-block label span {
    font-size: 14px;
    color: #8fa7b3;
    margin-left: 24px;
    line-height: 24px;
  }

  .input-block input,
  .input-block textarea {
    width: 100%;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    outline: none;
    color: #5c8599;
  }

  .input-block input {
    height: 64px;
    padding: 0 16px;
  }

  .input-block textarea {
    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    line-height: 28px;
  }

  .input-block .images-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 16px;
  }

  .input-block .images-container img {
    width: 100%;
    height: 96px;
    object-fit: cover;
    border-radius: 20px;
  }

  .input-block .images-container .new-image {
    height: 96px;
    background: #f5f8fa;
    border: 1px dashed #96d2f0;
    border-radius: 20px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .input-block input[type='file'] {
    visibility: hidden;
  }

  .input-block .button-select {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .input-block .button-select button {
    height: 64px;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    color: #5c8599;
    cursor: pointer;
  }

  .input-block .button-select button.active {
    background: #edfff6;
    border: 1px solid #a1e9c5;
    color: #37c77f;
  }

  .input-block .button-select button:first-child {
    border-radius: 20px 0px 0px 20px;
  }

  .input-block .button-select button:last-child {
    border-radius: 0 20px 20px 0;
    border-left: 0;
  }

  button.login-button {
    margin-top: 64px;

    width: 100%;
    height: 64px;
    border: 0;
    cursor: pointer;
    background: #3cdc8c;
    border-radius: 20px;
    color: #ffffff;
    font-weight: 800;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s;
  }

  button.login-button svg {
    margin-right: 16px;
  }

  button.login-button:hover {
    background: #36cf82;
  }

  .help-area {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;
    height: 10vh;

    a {
      color: #5c8599;
      text-decoration: none;
      bottom: 0;
    }
  }

  .remember-block {
    color: #5c8599;
    display: flex;
    justify-content: center;
    align-items: center;

    label {
      margin-left: 15px;
    }
  }

  .input-area {
    width: 30rem;
  }
`;
