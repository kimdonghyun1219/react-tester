import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount((count) => count + 1);
  };
  const onDecrease = () => {
    setCount((count) => count - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={onIncrease}>증가</button>
      <button onClick={onDecrease}>감소</button>
      <h3>{count}</h3>
    </div>
  );
};

export default Counter;
