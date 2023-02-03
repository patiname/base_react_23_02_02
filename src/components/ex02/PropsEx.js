export const PropsEx = ({ name, age, lan }) => {
  console.log(name, age);
  return (
    <h1>
      안녕 내이름은 {name}야 나이는 {age}살 이야, {lan}언어를 좋아해
    </h1>
  );
};
