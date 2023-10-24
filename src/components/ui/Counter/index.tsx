interface CounterProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const Counter = ({ count, onIncrease, onDecrease }: CounterProps) => {
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={onIncrease}>증가</button>
      <button onClick={onDecrease}>감소</button>
      <h3>{count}</h3>
    </div>
  )
}

export default Counter;