import React, { Suspense, memo } from 'react'; // ReactNode ReactElement
import type { FC, ReactNode } from 'react';
import { Link, Outlet } from 'react-router-dom';
interface IProps {
  children?: React.ReactNode;
}

const Discover: React.FunctionComponent<IProps> = () => {
  // &本来这一块交叉类型了children 现在由自己开发者自己在Iprops中决定是否要children
  return (
    <div>
      <div>
        <Link to="/discover/recommend">推荐remm</Link>
        <Link to="/discover/ranking">排行榜rank</Link>
        <Link to="/discover/songs">歌单song</Link>
        <Link to="/discover/djradio">主播电台DJ</Link>
        <Link to="/discover/artist">主播电台artist</Link>
        <Link to="/discover/album">新碟上架album</Link>
      </div>
      <Suspense fallback="loading.....................">
        <Outlet />
      </Suspense>
    </div>
  );
};
export default memo(Discover);
