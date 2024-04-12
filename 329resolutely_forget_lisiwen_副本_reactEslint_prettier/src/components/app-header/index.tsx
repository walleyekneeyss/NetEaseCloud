import React, { memo } from 'react'; // ReactNode ReactElement
import type { FC, ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';

import headerTitles from '@/assets/data/header_titles.json';

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';
interface IProps {
  children?: React.ReactNode;
}
interface ItemProp {
  title: string;
  type: string;
  link: string;
}
const AppHeader: React.FunctionComponent<IProps> = () => {
  // &本来这一块交叉类型了children 现在由自己开发者自己在Iprops中决定是否要children
  const showItem = (item: any) => {
    if (item.type === 'path') {
      return (
        <NavLink
          to={item.link}
          className={({ isActive }) => {
            return isActive ? 'active' : '';
          }}
        >
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    } else {
      return (
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      );
    }
  };
  return (
    //  <div className={Style['anchor-show']}></div>
    // wrap_v1 公共样式
    <HeaderWrapper>
      <div className="content wrap_v1">
        <HeaderLeft>
          <a href="" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="title-list">
            {headerTitles.map(item => {
              return (
                <div className="item active" key={item.title}>
                  {showItem(item)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
};
export default memo(AppHeader);
