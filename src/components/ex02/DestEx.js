const user = {
  userId: "sideway",
  email: "side@way.com",
  name: "옆길로새",
  profileImg: "me.jpg",
};

export const DestEx = () => {
  //   const userId = user.userId;
  //   const userEmail = user.email;
  //   const userName = user.name;
  //   const userProfileImg = user.profileImg;
  //   console.log(userEmail);

  const { userId, email, name, profileImg } = user;
  console.log(userId, email, name, profileImg);

  return (
    <div>
      <h1>유저 정보</h1>
      <ul>
        <li>유저 아이디: {userId}</li>
        <li>유저 이메일: {email}</li>
        <li>이름: {name}</li>
        <li>유저 프로필 사진: {profileImg}</li>
      </ul>
    </div>
  );
};
