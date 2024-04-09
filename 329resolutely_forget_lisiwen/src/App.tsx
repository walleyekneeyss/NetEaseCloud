import React, { memo } from 'react'; // ReactNode ReactElement
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AppFooter />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

import type { FC, ReactNode } from 'react';
// import './index.css';
// import styles from './index.module.scss';
import styles from './components/app-footer/index.module.less';

interface IProps {
  children?: React.ReactNode;
}

const AppFooter = React.memo(() => {
  // &本来这一块交叉类型了children 现在由自己开发者自己在Iprops中决定是否要children
  return <div className={styles.reactless}>AppFooters</div>;
});
AppFooter.displayName = 'AppFooter';
export default App;
