import React, { memo } from 'react'; // ReactNode ReactElement
import type { FC, ReactNode } from 'react';
import { RecommendWrapper } from './style';
import AreaHeaderV1 from '@/components/area-header-v1';
import { shallowEqualApp, useAppSelector } from '@/store';
import SongMenuItem from '@/components/song-menu-item';

interface IProps {
  children?: React.ReactNode;
}

const HotRecommend: React.FunctionComponent<IProps> = () => {
  // &本来这一块交叉类型了children 现在由自己开发者自己在Iprops中决定是否要children
  const { hotRecommends } = useAppSelector(state => {
    return {
      hotRecommends: state.recommend.hotRecommends
    };
  }, shallowEqualApp);
  return (
    <RecommendWrapper>
      <AreaHeaderV1 title="热门推荐" keywords={['华语', '流星', '摇滚', '民谣', '电子']} moreLink="/discover/songs" />
      <div className="recommend-list">
        {hotRecommends.map((item, index) => {
          return <SongMenuItem key={item.id} itemData={item} />;
        })}
      </div>
    </RecommendWrapper>
  );
};
export default memo(HotRecommend);
