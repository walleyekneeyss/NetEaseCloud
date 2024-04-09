import React, { memo, useRef } from 'react'; // ReactNode ReactElement
import type { FC, ReactNode, ElementRef } from 'react';
import { NewAlbumWrapper } from './style';
import AreaHeaderV1 from '@/components/area-header-v1';
import { Carousel } from 'antd';
import { useAppSelector, shallowEqualApp } from '@/store';
import NewAlbumItem from '@/components/new-album-item';
interface IProps {
  children?: React.ReactNode;
}

const NewAlbum: React.FunctionComponent<IProps> = () => {
  // &本来这一块交叉类型了children 现在由自己开发者自己在Iprops中决定是否要children
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);

  // 从store拿到newalbum
  const { newAlbums } = useAppSelector(
    state => ({
      newAlbums: state.recommend.newAlbums
    }),
    shallowEqualApp
  );
  function handlePrev() {
    console.log('handlePrev');
    bannerRef.current?.prev(); // .? 可选链  ?? 空值合并  const result = value ?? "default";
  }
  function handleNext() {
    console.log('handleNext');
    bannerRef.current?.next();
  }
  return (
    <NewAlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <button className="arrow arrow-left sprite_02" onClick={handlePrev}></button>
        <div className="banner">
          <Carousel ref={bannerRef} dots={false} speed={800}>
            {[0, 1].map(item => {
              //一层分两页，第二层每页5条数据
              return (
                <div key={item}>
                  <div className="album-list">
                    {newAlbums.slice(item * 5, (item + 1) * 5).map(album => {
                      return <NewAlbumItem key={album.name} propsData={album} />;
                    })}
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02" onClick={handleNext}></button>
      </div>
    </NewAlbumWrapper>
  );
};
export default memo(NewAlbum);
