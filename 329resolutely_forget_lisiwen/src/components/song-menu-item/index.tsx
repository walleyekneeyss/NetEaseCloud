import React, { memo } from 'react'; // ReactNode ReactElement
import type { FC, ReactNode } from 'react';
import { MenuItemWrapper } from './style';
import { formatCount, getImageSize } from '../../utils/format';
interface IProps {
  children?: React.ReactNode;
  itemData: any;
}

const SongMenuItem: React.FunctionComponent<IProps> = props => {
  // &本来这一块交叉类型了children 现在由自己开发者自己在Iprops中决定是否要children
  const { itemData } = props;
  return (
    <MenuItemWrapper>
      <div className="top">
        <img src={getImageSize(itemData.picUrl, 140)} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon headset"></i>
              <span className="count">{formatCount(itemData.playCount)} </span>
            </span>
            <i className="play sprite_icon"></i>
          </div>
        </div>
      </div>
      <div className="bottom">{itemData.name}</div>
    </MenuItemWrapper>
  );
};
export default memo(SongMenuItem);
