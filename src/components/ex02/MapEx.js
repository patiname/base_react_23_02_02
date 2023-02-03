const arr = [1, 2, 3, 4, 5, 6, 7, "여덟번째"];

const menus = [
  {
    id: 0,
    menu: "치킨",
    side: "맥주",
  },
  {
    id: 1,
    menu: "국밥",
    side: "수육",
  },
  {
    id: 2,
    menu: "햄버거",
    side: "콜라",
  },
];

export const MapEx = () => {
  //   for (let i = 0; i < arr.length; i++) {
  //     console.log(i);
  //   }

  // arr.map(변수 => 함수)
  //   arr.map((num) => console.log(num));

  return (
    <div>
      <h1>배열에 어떤값이 들어갔는가?</h1>
      <ul>
        {arr.map((num) => (
          <li key={num}>숫자: {num}</li>
        ))}
        {/* =>맵함수를 사용할때 반드시 key값을 넣어줘야됨
        =>key값은 유니크(고유값)으로 처리할 것 */}
      </ul>

      <h1>오늘의 메뉴!</h1>
      <ul>
        {menus.map((food) => (
          <li key={food.id}>
            오늘의 메뉴는 {food.menu}, 사이드 메뉴는 {food.side}
          </li>
        ))}
      </ul>
    </div>
  );
};
