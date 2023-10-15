import {useState} from "react";

const Sales = ({ title, count }: { title: string; count: number }) => {
  const a = 1;
  const [add, setAdd] = useState<number>(0);
  return (
    <div>
      <h2>{title}</h2>
      <h5>{add}</h5>
      <button onClick={() => setAdd(state => state + 1)} />
    </div>
  )
}

export default Sales;