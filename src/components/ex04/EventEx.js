import { useState } from "react";

export const EventEx = () => {
  // const [변수, 변경할값] = useState(변수값);
  const [num, setNum] = useState(0);

  console.log(num);

  return (
    <div>
      <h1>버튼을 클릭해 보세요!</h1>
      <h2>{num}</h2>
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
    </div>
  );
};
