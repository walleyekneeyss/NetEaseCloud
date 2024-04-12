// import './acc.less'
import { useState } from 'react';
import style from './acc.module.less';
function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  function handAfterChange(currentSlide) {
    console.log(currentSlide);
  }
  return (
    <div isPlay={isPlaying} className={style.acc} onClick={handAfterChange}>
      noverification_reactstencil
    </div>
  );
}

export default App;
