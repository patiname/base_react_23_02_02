// import Text from "./components/Text";
import { Text, Text2 } from "./components/Text";

function App() {
  return (
    <>
      <div>1번</div>
      <div>2번</div>
      {/* *JSX 문법 규칙
      =>반드시 부모로 묶여 있어야 된다
      =>태그는 반드시 닫혀있어야됨
      =>태그가 비어있을때 <></> fragment태그 라고함 */}

      <Text />
      {/* =>컴포넌트 */}

      <Text2 />
    </>
  );
}

// JSX 바깥 주석

export default App;
