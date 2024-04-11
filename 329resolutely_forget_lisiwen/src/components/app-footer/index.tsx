import React, { memo } from 'react'; // ReactNode ReactElement
import type { FC, ReactNode } from 'react';
import './index.less';
interface IProps {
  children?: React.ReactNode;
}

const AppFooter: React.FunctionComponent<IProps> = () => {
  // &本来这一块交叉类型了children 现在由自己开发者自己在Iprops中决定是否要children
  return (
    <div>
      <div
        className="awesome1"
        style={{
          position: 'relative',
          height: 325,
          overflow: 'hidden',
          borderTop: '1px solid #d3d3d3',
          background: '#f2f2f2'
        }}
      >
        <div className="awesome2" style={{ width: 980, margin: '0 auto' }}>
          <div className="awesome3" style={{ display: 'block', unicodeBidi: 'isolate' }}>
            <ul className="awesome4" style={{ display: 'flex', marginTop: 33, justifyContent: 'center' }}>
              <li className="awesome5" style={{ width: 45, marginLeft: 80, textAlign: 'center', color: '#666' }}>
                <a
                  className="awesome6"
                  style={{
                    display: 'block',
                    float: 'none',
                    width: 45,
                    height: 45,
                    margin: '0 auto'
                  }}
                  href="https://developer.music.163.com/st/developer"
                  target="_blank"
                  rel="noreferrer"
                >
                  多吃饭
                </a>
                <span
                  className="awesome7"
                  style={{
                    display: 'inline-block',
                    width: 100,
                    marginTop: 10,
                    marginLeft: '-27.5px',
                    fontWeight: 400,
                    fontSize: 12,
                    textAlign: 'center',
                    color: 'rgba(0, 0, 0, 0.5)'
                  }}
                >
                  音乐开放平台
                </span>
              </li>
              <li className="react" style={{ width: 45, marginLeft: 80, textAlign: 'center', color: '#666' }}>
                <a
                  className="vue"
                  style={{
                    display: 'block',
                    float: 'none',
                    width: 45,
                    height: 45,
                    margin: '0 auto'
                  }}
                  href="https://developer.music.163.com/st/developer"
                  target="_blank"
                  rel="noreferrer"
                >
                  李斯文
                </a>
                <span
                  className="awesome7"
                  style={{
                    display: 'inline-block',
                    width: 100,
                    marginTop: 10,
                    marginLeft: '-27.5px',
                    fontWeight: 400,
                    fontSize: 12,
                    textAlign: 'center',
                    color: 'rgba(0, 0, 0, 0.5)'
                  }}
                >
                  云村交易所
                </span>
              </li>
              <li className="awesome52" style={{ width: 45, marginLeft: 80, textAlign: 'center', color: '#666' }}>
                <a
                  className="awesome61"
                  style={{
                    display: 'block',
                    float: 'none',
                    width: 45,
                    height: 45,
                    margin: '0 auto'
                  }}
                  href="https://developer.music.163.com/st/developer"
                  target="_blank"
                  rel="noreferrer"
                >
                  丑八怪
                </a>
                <span
                  className="awesome7"
                  style={{
                    display: 'inline-block',
                    width: 100,
                    marginTop: 10,
                    marginLeft: '-27.5px',
                    fontWeight: 400,
                    fontSize: 12,
                    textAlign: 'center',
                    color: 'rgba(0, 0, 0, 0.5)'
                  }}
                >
                  Amped Studio
                </span>
              </li>
              <li className="awesome53" style={{ width: 45, marginLeft: 80, textAlign: 'center', color: '#666' }}>
                <a
                  className="awesome62"
                  style={{
                    display: 'block',
                    float: 'none',
                    width: 45,
                    height: 45,
                    margin: '0 auto'
                  }}
                  href="https://developer.music.163.com/st/developer"
                  target="_blank"
                  rel="noreferrer"
                >
                  多吃饭
                </a>
                <span
                  className="awesome7"
                  style={{
                    display: 'inline-block',
                    width: 100,
                    marginTop: 10,
                    marginLeft: '-27.5px',
                    fontWeight: 400,
                    fontSize: 12,
                    textAlign: 'center',
                    color: 'rgba(0, 0, 0, 0.5)'
                  }}
                >
                  X StudioAI歌手
                </span>
              </li>
              <li className="awesome54" style={{ width: 45, marginLeft: 80, textAlign: 'center', color: '#666' }}>
                <a
                  className="awesome63"
                  style={{
                    display: 'block',
                    float: 'none',
                    width: 45,
                    height: 45,
                    margin: '0 auto'
                  }}
                  href="https://developer.music.163.com/st/developer"
                  target="_blank"
                  rel="noreferrer"
                >
                  丑八怪
                </a>
                <span
                  className="awesome7"
                  style={{
                    display: 'inline-block',
                    width: 100,
                    marginTop: 10,
                    marginLeft: '-27.5px',
                    fontWeight: 400,
                    fontSize: 12,
                    textAlign: 'center',
                    color: 'rgba(0, 0, 0, 0.5)'
                  }}
                >
                  云村交易所
                </span>
              </li>
              <li className="awesome55" style={{ width: 45, marginLeft: 80, textAlign: 'center', color: '#666' }}>
                <a
                  className="awesome64"
                  style={{
                    display: 'block',
                    float: 'none',
                    width: 45,
                    height: 45,
                    margin: '0 auto'
                  }}
                  href="https://developer.music.163.com/st/developer"
                  target="_blank"
                  rel="noreferrer"
                >
                  多吃饭
                </a>
                <span
                  className="awesome7"
                  style={{
                    display: 'inline-block',
                    width: 100,
                    marginTop: 10,
                    marginLeft: '-27.5px',
                    fontWeight: 400,
                    fontSize: 12,
                    textAlign: 'center',
                    color: 'rgba(0, 0, 0, 0.5)'
                  }}
                >
                  云村交易所
                </span>
              </li>
              <li className="awesome56" style={{ width: 45, marginLeft: 80, textAlign: 'center', color: '#666' }}>
                <a
                  className="awesome65"
                  style={{
                    display: 'block',
                    float: 'none',
                    width: 45,
                    height: 45,
                    margin: '0 auto'
                  }}
                  href="https://developer.music.163.com/st/developer"
                  target="_blank"
                  rel="noreferrer"
                >
                  多吃饭
                </a>
                <span
                  className="awesome7"
                  style={{
                    display: 'inline-block',
                    width: 100,
                    marginTop: 10,
                    marginLeft: '-27.5px',
                    fontWeight: 400,
                    fontSize: 12,
                    textAlign: 'center',
                    color: 'rgba(0, 0, 0, 0.5)'
                  }}
                >
                  云村交易所
                </span>
              </li>
              <li className="awesome57" style={{ width: 45, marginLeft: 80, textAlign: 'center', color: '#666' }}>
                <a
                  className="awesome66"
                  style={{
                    display: 'block',
                    float: 'none',
                    width: 45,
                    height: 45,
                    margin: '0 auto'
                  }}
                  href="https://developer.music.163.com/st/developer"
                  target="_blank"
                  rel="noreferrer"
                >
                  多吃饭
                </a>
                <span
                  className="awesome7"
                  style={{
                    display: 'inline-block',
                    width: 100,
                    marginTop: 10,
                    marginLeft: '-27.5px',
                    fontWeight: 400,
                    fontSize: 12,
                    textAlign: 'center',
                    color: 'rgba(0, 0, 0, 0.5)'
                  }}
                >
                  云村交易所
                </span>
              </li>
            </ul>
            <div
              className="copy"
              style={{
                marginTop: 33,
                textAlign: 'center',
                margin: '0 auto',
                lineHeight: '24px',
                color: '#666',
                paddingTop: '47px'
              }}
            >
              <p className="link" id="music-link">
                <a
                  href="//st.music.163.com/official-terms/service"
                  target="_blank"
                  className="item s-fc3"
                  rel="noreferrer"
                >
                  服务条款
                </a>
                <span className="line">|</span>
                <a
                  href="//st.music.163.com/official-terms/privacy"
                  target="_blank"
                  className="item s-fc3"
                  rel="noreferrer"
                >
                  隐私政策
                </a>
                <span className="line">|</span>
                <a
                  href="//st.music.163.com/official-terms/children"
                  target="_blank"
                  className="item s-fc3"
                  rel="noreferrer"
                >
                  儿童隐私政策
                </a>
                <span className="line">|</span>
                <a
                  href="//music.163.com/st/staticdeal/complaints.html"
                  target="_blank"
                  className="item s-fc3"
                  rel="noreferrer"
                >
                  版权投诉
                </a>
                <span className="line">|</span>
                <a href="http://ir.music.163.com" target="_blank" className="item s-fc3" rel="noreferrer">
                  投资者关系
                </a>
                <span className="line">|</span>
                <a
                  href="https://music.163.com/ui/resource"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="item s-fc3"
                >
                  广告合作
                </a>
                <span className="line">|</span>
                <a
                  href="//mp.music.163.com/600948c936c13f4d09752e73/contact-us-web/index.html?source=Music-Main-Station"
                  target="_blank"
                  className="s-fc3"
                  rel="noreferrer"
                >
                  联系我们
                </a>
              </p>
              <p className="right s-fc3">
                <a href="https://jubao.163.com" target="_blank" className="sep alink s-fc3" rel="noreferrer">
                  廉正举报
                </a>
                <span className="sep span">不良信息举报邮箱: 51jubao@service.netease.com</span>
                <span className="span">客服热线：95163298</span>
              </p>
              <p className="right s-fc3">
                <span className="span">互联网宗教信息服务许可证：浙（2022）0000120</span>
                <span className="span">增值电信业务经营许可证：浙B2-20150198</span>
                <a
                  href="https://beian.miit.gov.cn/#/Integrated/index"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="alink s-fc3"
                >
                  粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站
                </a>
              </p>
              <p className="right s-fc3">
                <span className="sep span">网易公司版权所有©1997-2024</span>
                <span className="span">杭州乐读科技有限公司运营：</span>
                <a
                  href="https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/34942157981/2e30/30c1/ad1f/7be053a28e91dd8bafe49bdf6455cb2a.png"
                  target="_blank"
                  className="alink s-fc3"
                  rel="noreferrer"
                >
                  浙网文[2021] 1186-054号
                </a>
                <a
                  href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="alink s-fc3 police-link"
                >
                  <span className="police-logo"></span>
                  <span className="police-text">浙公网安备 33010802013307号</span>
                </a>
              </p>
              <p className="right s-fc3">
                <a
                  href="https://beian.cac.gov.cn/#/index"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="alink s-fc3 police-link"
                >
                  <span className="police-text">
                    算法备案公示：网信算备330109830471102220013号、网信算备330109830471103220019号、网信算备330109830471104220015号
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(AppFooter);
