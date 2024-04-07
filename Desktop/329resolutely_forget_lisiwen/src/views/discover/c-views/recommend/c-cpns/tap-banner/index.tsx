import { shallowEqualApp, useAppSelector } from '@/store';
import React, { memo, useRef } from 'react'; // ReactNode ReactElement

import { Carousel } from 'antd';
import type { FC, ReactNode, ElementRef } from 'react';
import { BannerLeft, BannerWrapper, BannerRight, BannerControl } from './style';

interface IProps {
  children?: React.ReactNode;
}

const TapBanner: React.FunctionComponent<IProps> = () => {
  // &本来这一块交叉类型了children 现在由自己开发者自己在Iprops中决定是否要children
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);
  const { banners } = useAppSelector(
    state => ({
      banners: state.recommend.banners
    }),
    shallowEqualApp
  );
  function handPrev() {
    bannerRef.current?.prev();
  }
  function handNext() {
    bannerRef.current?.next();
  }
  return (
    <BannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel autoplay autoplaySpeed={3000} ref={bannerRef}>
            {banners.map(item => {
              return (
                <div className="banner-item" key="item.imageUrl">
                  <img
                    className="iamge"
                    style={{ width: '730px', height: '285px' }}
                    src={item.imageUrl}
                    alt={item.Typetitle}
                  />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={handPrev}></button>
          <button className="btn right" onClick={handNext}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
};
export default memo(TapBanner);
