// *컴포넌트 사용 규칙
// 1.파일명 첫글자는 대문자
// 2.내보내기 (export)
// 3.필요로 하는 컴포넌트에서 불러오기(import)를 해야됨

export const Text = () => {
  return (
    <>
      <h1>컴포넌트는 무엇일까요?</h1>
      <h1>컴포넌트는 무엇일까요?</h1>
      <h1>컴포넌트는 무엇일까요?</h1>
      <h1>컴포넌트는 무엇일까요?</h1>
      <h1>컴포넌트는 무엇일까요?</h1>
      <h1>컴포넌트는 무엇일까요?</h1>
    </>
  );
};

export const Text2 = () => {
  return <div>두번째 텍스트</div>;
};

// export default Text;
// export default Text2;
