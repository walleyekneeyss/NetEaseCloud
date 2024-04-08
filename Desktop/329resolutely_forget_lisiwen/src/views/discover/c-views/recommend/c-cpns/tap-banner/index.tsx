import { shallowEqualApp, useAppSelector } from '@/store';
import React, { memo, useRef, useState } from 'react'; // ReactNode ReactElement

import { Carousel } from 'antd';
import type { FC, ReactNode, ElementRef } from 'react';
import { BannerLeft, BannerWrapper, BannerRight, BannerControl } from './style';
import classNames from 'classnames';

interface IProps {
  children?: React.ReactNode;
}

const TapBanner: React.FunctionComponent<IProps> = () => {
  // &本来这一块交叉类型了children 现在由自己开发者自己在Iprops中决定是否要children
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);
  const { banners } = useAppSelector(
    state => ({
      banners: state.recommend.banners
    }),
    shallowEqualApp
  );
  // afterchange 切换图片变背景
  function handAfterChange(currentSlide: number) {
    console.log('currentSlide', currentSlide);
    setCurrentIndex(currentSlide);
  }
  // function handBeforeChange(currentSlide: number) {
  //   setCurrentIndex(-1);
  // }
  // 左右按钮
  function handPrev() {
    bannerRef.current?.prev();
  }
  function handNext() {
    bannerRef.current?.next();
  }
  // 获取背景图片
  let bgImage = banners[currentIndex]?.imageUrl;
  if (bgImage) {
    bgImage = bgImage + `?imageView&quality=80&blur=40x20`;
  }
  console.log('bgImage', bgImage);

  return (
    <BannerWrapper
      style={{
        background: `url('${bgImage}') center center/6000px`,
        transition: 'opacity 1s ease-out 0s',
        opacity: 1
      }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            dots={false}
            effect="fade"
            afterChange={handAfterChange}
            // beforeChange={handBeforeChange}
            autoplaySpeed={3000}
            ref={bannerRef}
          >
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
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span className={classNames('item', { active: index === currentIndex })}></span>
                </li>
              );
            })}
          </ul>
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
