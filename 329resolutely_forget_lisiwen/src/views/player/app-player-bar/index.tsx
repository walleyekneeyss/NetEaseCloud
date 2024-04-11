import React, { memo, useState } from 'react'; // ReactNode ReactElement
import type { FC, ReactNode } from 'react';
import { PlayerBarWrapper, BarControl, BarPlayerInfo, BarOperator } from './style';
import { NavLink } from 'react-router-dom';
import { Slider } from 'antd';
import { shallowEqualApp, useAppSelector } from '@/store';
import { getImageSize } from '@/utils/format';

interface IProps {
  children?: React.ReactNode;
}

const AppPlayerBar: React.FunctionComponent<IProps> = () => {
  // &本来这一块交叉类型了children 现在由自己开发者自己在Iprops中决定是否要children
  const { currentSong } = useAppSelector(
    state => ({
      currentSong: state.player.currentSong
    }),
    shallowEqualApp
  );
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
        <BarControl>
          <button className="sprite_playbar btn prev"></button>
          <button className="sprite_playbar btn play"></button>
          <button className="sprite_playbar btn next"></button>
        </BarControl>
        <BarPlayerInfo>
          <div>
            <NavLink to="/discover/player">
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
    </PlayerBarWrapper>
  );
};
export default memo(AppPlayerBar);
