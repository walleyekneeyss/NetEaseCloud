import React, { memo } from 'react'; // ReactNode ReactElement
import type { FC, ReactNode } from 'react';
import { TapRankingWrapper } from './style';
import AreaHeaderV1 from '@/components/area-header-v1';
import TapRankingItem from '../top-ranking-item';
import { shallowEqualApp, useAppSelector } from '@/store';
interface IProps {
  children?: React.ReactNode;
}

const TapRanking: React.FunctionComponent<IProps> = () => {
  // &本来这一块交叉类型了children 现在由自己开发者自己在Iprops中决定是否要children
  const { rankingData } = useAppSelector(
    state => ({
      rankingData: state.recommend.rankingData
    }),
    shallowEqualApp
  );
  return (
    <TapRankingWrapper>
      <AreaHeaderV1 title="榜单" moreText="查看更多" moreLink="/discover/ranking" />
      <div className="content">
        {rankingData &&
          rankingData.map(item => {
            return <TapRankingItem key={item.name} itemData={item}></TapRankingItem>;
          })}
      </div>
    </TapRankingWrapper>
  );
};
export default memo(TapRanking);
