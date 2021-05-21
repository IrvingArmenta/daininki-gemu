import { AnimatePresence, motion, Variants } from 'framer-motion';
import React, { FC, useCallback, useMemo, useRef, useState } from 'react';
import { ReactComponent as PlayButton } from '../../public/nintendo-switch-play-button.svg';
import styled from 'styled-components';

type SwitchVideoType = {
  videoId: string;
  title: string;
};

const VideoWrap = styled.div`
  overflow: hidden;
  padding-bottom: 43.25%;
  position: relative;
  height: 0;
  background-image: url('/nintendo-switch-frame.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  iframe,
  .play-button {
    background-color: transparent;
    border: 0;
    left: 50%;
    top: calc(50% + 2px);
    height: 75%;
    width: 58%;
    position: absolute;
    overflow: hidden;
    display: block;
    transform: translate(-50%, -50%);
    &::before {
      content: '';
      background-color: rgba(0, 0, 0, 0.4);
      width: 100%;
      height: 100%;
      position: absolute;
      transform: inherit;
      z-index: 2;
      transition: background-color 150ms ease-in-out;
    }
    svg,
    img {
      position: inherit;
    }
    &:hover {
      &::before {
        background-color: rgba(0, 0, 0, 0.6);
      }
      .play-icon {
        transform: translate(-50%, -50%) scale(0.9);
      }
    }
  }
  .placeholder {
    height: 130%;
    width: 100%;
    transform: inherit;
  }
  .play-icon {
    z-index: 3;
    transform: translate(-50%, -50%) scale(1);
    background-color: #fff;
    border-radius: 50%;
    fill: ${(p) => p.theme.colors.primary.base} !important;
    width: 30%;
    transition: transform 150ms ease-in-out;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
`;

const SwitchVideo: FC<SwitchVideoType> = (props) => {
  const { videoId, title } = props;
  const [loadVideo, setLoadVideo] = useState(false);
  const IframeRef = useRef<HTMLIFrameElement>(null);
  const placeholder = useMemo(
    () => `http://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    [videoId]
  );

  const handleClik = async () => {
    setLoadVideo(true);
    await IframeRef.current?.requestFullscreen();
  };

  return (
    <VideoWrap className="switch-video">
      <AnimatePresence>
        {!loadVideo ? (
          <motion.button
            className="play-button"
            onClick={handleClik}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <PlayButton className="play-icon" />
            <img
              src={placeholder}
              className="placeholder glove-cursor"
              alt={`${title}のプレースホルダー`}
            />
          </motion.button>
        ) : (
          <motion.iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            title={title}
            loading="lazy"
            className="glove-cursor"
            ref={IframeRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
          />
        )}
      </AnimatePresence>
    </VideoWrap>
  );
};

export default SwitchVideo;
