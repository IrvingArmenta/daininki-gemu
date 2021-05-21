import React from 'react';
import styled from 'styled-components';

const ErrorWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
`;

function Error404() {
  return (
    <ErrorWrap>
      <p>ページが表示できません</p>
    </ErrorWrap>
  );
}

export default Error404;
