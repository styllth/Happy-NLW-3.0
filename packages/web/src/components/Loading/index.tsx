import React from 'react';

import { SpinnerContainer, Spinner } from './styles';

const Loading: React.FC = () => {
  return (
    <SpinnerContainer>
      <Spinner />
      <span>Aguarde ...</span>
    </SpinnerContainer>
  );
};

export default Loading;
