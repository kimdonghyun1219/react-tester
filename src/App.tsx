import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Counter from "@/src/components/ui/Counter/index.tsx";

function App() {
  const [count, setCount] = useState(0)

  const onIncrease = () => setCount(state => state + 1);
  const onDecrease = () => setCount(state => state - 1);

  return (
    <div>
      <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
    </div>
  )
}

export default App
