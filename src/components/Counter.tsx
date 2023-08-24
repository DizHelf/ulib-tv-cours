import React from 'react';
import cls from './Counter.module.scss'

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const clickHandler = () => {
    setCount((prev) => prev + 1)
  }

  return(
    <>
      <h2>{count}</h2>
      <button className={cls.ses} onClick={clickHandler}>+1</button>
    </>
  );
};

export default Counter;