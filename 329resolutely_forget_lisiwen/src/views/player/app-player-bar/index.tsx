import React, { memo, useEffect, useRef, useState } from 'react'; // ReactNode ReactElement
import type { FC, ReactNode } from 'react';
import { PlayerBarWrapper, BarControl, BarPlayerInfo, BarOperator } from './style';
import { NavLink } from 'react-router-dom';
import { Slider } from 'antd';
import { shallowEqualApp, useAppSelector } from '@/store';
import { getImageSize, getPlayUrl } from '@/utils/format';

interface IProps {
  children?: React.ReactNode;
  isPlaying?: any;
}

const AppPlayerBar: React.FunctionComponent<IProps> = () => {
  const playMouseEnter = () => {
    if (backgroundPosition === -204) {
      setPlayerStyle({ backgroundPosition: '-40px -204px' });
    } else if (backgroundPosition === -165) {
      setPlayerStyle({ backgroundPosition: '-40px -165px' });
    }
  };

  const playMouseLeave = () => {
    setPlayerStyle({});
  };
  const [playerStyle, setPlayerStyle] = useState({});
  const [backgroundPosition, setBackgroundPosition] = useState(-204);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  function playClick() {
    console.log('isPlaying', isPlaying);

    !isPlaying ? audioRef.current?.play().catch(() => setIsPlaying(false)) : audioRef.current?.pause();
    setIsPlaying(!isPlaying);
    if (backgroundPosition === -204) {
      setBackgroundPosition(-165);
    } else {
      setBackgroundPosition(-204);
    }
  }
  // &本来这一块交叉类型了children 现在由自己开发者自己在Iprops中决定是否要children
  const { currentSong } = useAppSelector(
    state => ({
      currentSong: state.player.currentSong
    }),
    shallowEqualApp
  );
  useEffect(() => {
    // audioRef.current.src = getPlayUrl(currentSong.id);
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.src = getPlayUrl(currentSong.id);
    }
    audioRef.current
      ?.play()
      .then(() => {
        setIsPlaying(true);
        console.log('歌曲播放成功');
      })
      .catch(err => {
        console.log('歌曲播放失败', err);
        setIsPlaying(false);
      });
  }, [currentSong]);
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const handleMouseEnter = () => {
    setIsBannerVisible(true);
  };
  const handleMouseLeave = () => {
    setIsBannerVisible(false); // 处理划入划出时的paliyerbar的显示隐藏
  };

  return (
    <PlayerBarWrapper
      className={` ${isBannerVisible ? 'sprite_playbar' : 'sprite_playbar'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="content wrap-v2">
        <BarControl data-is-playing={isPlaying}>
          <button className="sprite_playbar btn prev"></button>
          <button
            className="sprite_playbar btn play"
            onClick={playClick}
            // onMouseEnter={playMouseEnter}
            // onMouseLeave={playMouseLeave}
            style={{ backgroundPosition: `0 ${backgroundPosition}px` }}
          ></button>
          <button className="sprite_playbar btn next"></button>
        </BarControl>
        <BarPlayerInfo>
          <div>
            <NavLink to="/discover/album">
              <img className="image" src={getImageSize(currentSong?.al?.picUrl, 50)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong?.ar[0]?.name}</span>
            </div>
            <div className="progress">
              <Slider />
              <div className="time">
                <span className="current">0:52</span>
                <span className="divider">/</span>
                <span className="duration">4:35</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator>
          <div className="left">
            <button className=" btn pip"></button>
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button className="sprite_playbar btn loop"></button>
            <button className="sprite_playbar btn playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio ref={audioRef} src={getPlayUrl(currentSong.id)}></audio>
    </PlayerBarWrapper>
  );
};
export default memo(AppPlayerBar);
