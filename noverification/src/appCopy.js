// import './acc.less'
import style from './acc.module.less';
const App = () => {
  const handAfterChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div className={style.acc} onClick={handAfterChange}>
      noverification_reactstencil
    </div>
  );
};

export default App;
