import React, { memo } from 'react'; // ReactNode ReactElement
import type { FC, ReactNode } from 'react';
interface IProps {
  children?: React.ReactNode;
  name: string;
  age: number;
  height?: number;
}

// const Download = (prop: IProps) => {
//   return (
//     <div>
//       Download
//       {prop.name}
//       {prop.age}
//       {prop.height}
//     </div>
//   );
// };
const Download: React.FunctionComponent<IProps> = prop => {
  // &本来这一块交叉类型了children 现在由自己开发者自己在Iprops中决定是否要children
  return (
    <div>
      Download
      {prop.name}-{prop.age}-{prop.height}
      {prop.children}
    </div>
  );
};
Download.defaultProps = { name: 'siwen', age: 23, height: 157 };
// Download.displayName = 'Lisiwen';
export default memo(Download);
// import React, { memo } from 'react'  --rmc
// export default memo(function index() {
//   return (
//     <div>

//     </div>
//   )
// })
export type AnchorBlockType = {
  className?: string;
  style?: React.CSSProperties;
  /** 头像 */
  avatar: string;
  /** 昵称 */
  nickname?: string;
  /** 主播UID */
  anchorID?: string;
  /** 抖音号 */
  displayID?: string;
  /** 修改按钮参数 */
  buttonProps?: any;
};
const AnchorBlock: React.FC<AnchorBlockType> = props => (
  <div style={props?.style}>{/* <div>一条语句return()箭头函数简写</div> */}</div>
);
