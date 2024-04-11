import React, { memo } from 'react'; // ReactNode ReactElement
import type { FC, ReactNode } from 'react';
import { TapRankingItemWrapper } from './style';
import { getImageSize } from '@/utils/format';
interface IProps {
  children?: React.ReactNode;
  itemData: any;
}

const TapRankingItem: React.FunctionComponent<IProps> = props => {
  // &本来这一块交叉类型了children 现在由自己开发者自己在Iprops中决定是否要children
  const { itemData } = props;
  console.log(itemData, 'itemData');
  return (
    <TapRankingItemWrapper>
      <div className="header">
        <div className="image">
          <img src={getImageSize(itemData.coverImgUrl, 80)} alt="" />
          <a href="" className="sprite_covor"></a>
        </div>
        <div className="info">
          <div className="name">{itemData.name}</div>
          <div>
            <button className="sprite_02 btn play"></button>
            <button className="sprite_02 btn favor"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {itemData.tracks &&
          itemData.tracks.slice(0, 10).map((item: any, index: number) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <span className="name text-nowrap">{item.name}</span>
                  <div className="operate">
                    <button className="btn sprite_02 play"></button>
                    <button className="btn sprite_icon2 addto"></button>
                    <button className="btn sprite_02 favor"></button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="footer">
        <a href="#/discover/ranking">查看全部 &gt;</a>
      </div>
    </TapRankingItemWrapper>
  );
};
export default memo(TapRankingItem);
