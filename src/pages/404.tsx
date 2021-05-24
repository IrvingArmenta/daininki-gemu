import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const ErrorWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
  font-size: 24px;
  flex-direction: column;
  h1 {
    color: ${(p) => p.theme.colors.primary.base};
  }
  > div {
    border: 2px solid #333;
    padding: 32px;
    border-radius: 16px;
    text-align: center;
  }
`;

function Error404() {
  return (
    <ErrorWrap>
      <div>
        <h1>Error 404</h1>
        <p>ページが表示できません</p>
        <Link href="/">トップページ</Link>
      </div>
    </ErrorWrap>
  );
}

export default Error404;
