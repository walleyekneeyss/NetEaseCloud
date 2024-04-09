import React, { memo } from 'react'; // ReactNode ReactElement
import type { FC, ReactNode } from 'react';
import { NewalbumItemWrapper } from './style';
import { getImageSize } from '@/utils/format';
interface IProps {
  children?: React.ReactNode;
  propsData: any;
}

const NewalbumItem: React.FunctionComponent<IProps> = props => {
  // &本来这一块交叉类型了children 现在由自己开发者自己在Iprops中决定是否要children
  const { propsData } = props;
  return (
    <NewalbumItemWrapper>
      <div className="top">
        <img src={getImageSize(propsData.picUrl, 100)} alt="" />
        <a href="" className="cover sprite_covor"></a>
      </div>
      <div className="bottom">
        <div className="name">{propsData.name}</div>
        <div className="artist">{propsData.artist.name}</div>
      </div>
    </NewalbumItemWrapper>
  );
};
export default memo(NewalbumItem);
