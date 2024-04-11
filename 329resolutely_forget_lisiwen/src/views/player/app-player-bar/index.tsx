import React, { memo, useState } from 'react'; // ReactNode ReactElement
import type { FC, ReactNode } from 'react';
import { PlayerBarWrapper, BarControl, BarPlayerInfo, BarOperator } from './style';
import { NavLink } from 'react-router-dom';
import { Slider } from 'antd';

interface IProps {
  children?: React.ReactNode;
}

const AppPlayerBar: React.FunctionComponent<IProps> = () => {
  // &本来这一块交叉类型了children 现在由自己开发者自己在Iprops中决定是否要children
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
          <div className="image">
            <NavLink to="/discover/player">
              <img src="https://p2.music.126.net/JlPoON3LMftOcCLMdM5MUQ==/109951169347110253.jpg?param=34y34" alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">siluodadao</span>
              <span className="singer-name">liangbo</span>
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
