import React, { FC } from 'react';
import { FooterWrap } from './style';

const Footer: FC<{ isHome: boolean }> = (props) => {
  const { isHome } = props;

  if (isHome) {
    return null;
  }

  return (
    <FooterWrap>
      <div>
        <div className="left">© Nintendo</div>
        <div className="right">
          <a
            href="https://www.nintendo.co.jp/anzen/index.html"
            rel="noopener noreferrer"
            target="__blank"
          >
            <svg viewBox="0 0 1650 1650">
              <path d="M825 0C368 0 0 368 0 825s368 825 825 825 825-369 825-825S1281 0 825 0zm253 883c0 3-3 3-6 6 0 0-264 264-300 297-38 33-99 33-138 0-36-30-41-80-11-116l11-11 237-234-236-234c-36-30-41-80-11-115l11-11c38-33 99-33 138 0 36 33 300 297 300 297 33 33 38 85 5 121z"></path>
            </svg>
            <span>健康と安全のために</span>
          </a>
          <a
            href="https://www.nintendo.co.jp/about_hp.html"
            rel="noopener noreferrer"
            target="__blank"
          >
            <svg viewBox="0 0 1650 1650">
              <path d="M825 0C368 0 0 368 0 825s368 825 825 825 825-369 825-825S1281 0 825 0zm253 883c0 3-3 3-6 6 0 0-264 264-300 297-38 33-99 33-138 0-36-30-41-80-11-116l11-11 237-234-236-234c-36-30-41-80-11-115l11-11c38-33 99-33 138 0 36 33 300 297 300 297 33 33 38 85 5 121z"></path>
            </svg>
            <span>任天堂ウェブサイトポリシー</span>
          </a>
          <a
            href="https://www.nintendo.co.jp/support/inquiry/index.html"
            rel="noopener noreferrer"
            target="__blank"
          >
            <svg viewBox="0 0 1650 1650">
              <path d="M825 0C368 0 0 368 0 825s368 825 825 825 825-369 825-825S1281 0 825 0zm253 883c0 3-3 3-6 6 0 0-264 264-300 297-38 33-99 33-138 0-36-30-41-80-11-116l11-11 237-234-236-234c-36-30-41-80-11-115l11-11c38-33 99-33 138 0 36 33 300 297 300 297 33 33 38 85 5 121z"></path>
            </svg>
            <span>お問い合わせ</span>
          </a>
        </div>
      </div>
    </FooterWrap>
  );
};

export default Footer;
