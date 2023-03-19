import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [count, setcount] = useState(1);
  const onClickchange = () => {
    setcount(count + 1);
  };
  return (
    <dev class="counter">
      <h1>カウンターアプリ</h1>
      <p>{count}</p>
      <button onClick={onClickchange}>カウント</button>
    </dev>
  );
}
