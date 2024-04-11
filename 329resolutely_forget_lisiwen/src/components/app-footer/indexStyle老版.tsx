import React, { Fragment, memo } from 'react'; // ReactNode ReactElement
import type { FC, ReactNode } from 'react';
// import './index.css';
// import styles from './index.module.scss';
// import styles from './index.module.less';

import { footerLinks, footerImages } from '@/assets/data/local-data';

import { AppFooterWrapper, FooterLeft, FooterRight } from './style';

interface IProps {
  children?: React.ReactNode;
}

interface ItemProps {
  link: string;
  title: string;
}

const AppFooter: React.FunctionComponent<IProps> = () => {
  // &本来这一块交叉类型了children 现在由自己开发者自己在Iprops中决定是否要children
  return (
    <AppFooterWrapper>
      <div className="wrap-v2 content">
        <FooterLeft className="left">
          <div className="link">
            {footerLinks.map(item => {
              return (
                <Fragment key={item.title}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                  <span className="line">|</span>
                </Fragment>
              );
            })}
          </div>
          <div className="copyright">
            <span>网易公司版权所有©1997-2020</span>
            <span>
              杭州乐读科技有限公司运营：
              <a
                href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
                rel="noopener noreferrer"
                target="_blank"
              >
                浙网文[2018]3506-263号
              </a>
            </span>
          </div>
          <div className="report">
            <span>违法和不良信息举报电话：0571-89853516</span>
            <span>
              举报邮箱：
              <a href="mailto:ncm5990@163.com" target="_blank" rel="noopener noreferrer">
                ncm5990@163.com
              </a>
            </span>
          </div>
          <div className="info">
            <span>粤B2-20090191-18</span>
            <a
              href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action"
              rel="noopener noreferrer"
              target="_blank"
            >
              工业和信息化部备案管理系统网站
            </a>
          </div>
        </FooterLeft>
        <FooterRight className="right">
          {footerImages &&
            footerImages.map((item, index) => {
              const title = (item as unknown as { title: string }).title;
              return (
                <li className="item" key={item.link}>
                  <a className="link" href={item.link} rel="noopener noreferrer" target="_blank">
                    {' '}
                  </a>
                  <span className="title">{title}</span>
                </li>
              );
            })}
        </FooterRight>
      </div>
    </AppFooterWrapper>
  );
};
export default memo(AppFooter);
