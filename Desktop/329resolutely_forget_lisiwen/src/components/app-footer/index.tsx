import React, { memo } from 'react'; // ReactNode ReactElement
import type { FC, ReactNode } from 'react';
// import './index.css';
// import styles from './index.module.scss';
import styles from './index.module.css';
interface IProps {
  children?: React.ReactNode;
}

const AppFooter: React.FunctionComponent<IProps> = () => {
  // &本来这一块交叉类型了children 现在由自己开发者自己在Iprops中决定是否要children
  return <div className={styles.reactless}>AppFooters</div>;
};
export default memo(AppFooter);
