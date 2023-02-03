// import Text from "./components/Text";
import { Text, Text2 } from "./components/ex01/Text";
import { DestEx } from "./components/ex02/DestEx";
import { MapEx } from "./components/ex02/MapEx";
import { PropsEx } from "./components/ex02/PropsEx";

function App() {
  return (
    <>
      {/* <div>1번</div>
      <div>2번</div> */}
      {/* *JSX 문법 규칙
      =>반드시 부모로 묶여 있어야 된다
      =>태그는 반드시 닫혀있어야됨
      =>태그가 비어있을때 <></> fragment태그 라고함 */}

      {/* <Text />
      <Text2 /> */}
      {/* =>컴포넌트 */}

      {/* <PropsEx name="pncoding" age="12" lan="리엑트" />
      <PropsEx name="sideway" age="20" lan="자바스크립트" /> */}

      {/* <DestEx /> */}
      <MapEx />
    </>
  );
}

// JSX 바깥 주석

export default App;
