import { useEffect } from "react";
import { useState } from "react";

export const UseEffectEx = () => {
  const [num, setNum] = useState(0);
  const [text, setText] = useState("");

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  //   *1번 예시
  //   useEffect(() => {
  //     console.log("랜더링 될때마다 실행");
  //     // =>랜더링 될때 즉, 함수를 매번 호출하기 때문에 계속 함수를 실행함
  //     // =>단 onChange 이벤트 처럼 값이 바뀔때 마다
  //     // 매번 업데이트가 되기 때문에 비효율적임
  //   });

  //   *2번 예시
  useEffect(() => {
    console.log("num값이 변경때만 실행");
  }, [num]);

  useEffect(() => {
    console.log("text값이 변경될때만 실행");
  }, [text]);

  //   *3번 예시
  useEffect(() => {
    console.log("첫 랜더링 될때만 실행");
  }, []);

  return (
    <>
      <div>
        <h3>업데이트 하였을때</h3>
        <p>숫자: {num}</p>
        <button onClick={() => setNum(num + 1)}>업데이트!</button>
      </div>

      <hr />

      <div>
        <h3>onChange를 사용하였을때</h3>
        <p>작성내용: {text}</p>
        <input type="text" value={text} onChange={onChangeText} />
      </div>
    </>
  );
};
