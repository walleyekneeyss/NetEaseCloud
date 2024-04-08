import React, { memo } from 'react'; // ReactNode ReactElement
import type { FC, ReactNode } from 'react';
import { HeaderV1Wrapper } from './style';
import { Link } from 'react-router-dom';

interface IProps {
  children?: React.ReactNode;
  title?: string;
  keywords?: string[];
  moreText?: string;
  moreLink?: string;
  icon?: string;
}

const AreaHeaderV1: React.FunctionComponent<IProps> = props => {
  // &本来这一块交叉类型了children 现在由自己开发者自己在Iprops中决定是否要children
  const { title = '默认title', keywords = [], moreText = '更多', moreLink = '/', icon } = props;
  return (
    <HeaderV1Wrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keywords">
          {keywords.map(item => {
            return (
              <div className="item" key={item}>
                <span className="link">{item}</span>
                <span className="divider">|</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <Link to={moreLink} className="more">
          {moreText}
        </Link>
        <i className="sprite_02 icon"></i>
      </div>
    </HeaderV1Wrapper>
  );
};
export default memo(AreaHeaderV1);
