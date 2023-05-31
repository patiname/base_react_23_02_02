import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const userDb = {
  id: 0,
  username: "test",
  password: "123123123",
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 200px;
`;

const Form = styled.form`
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dbdbdb;
  padding: 30px;
`;

const Title = styled.h3`
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 30px;
`;

const Input = styled.input`
  all: unset;
  border: 1px solid #dbdbdb;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  margin-top: 10px;
  padding-left: 10px;
  font-size: 18px;
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  background-color: salmon;
  border-radius: 5px;
  color: white;
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
  opacity: ${(props) => (props.active ? 1 : 0.5)};
`;

const ErrorMessage = styled.div`
  font-size: 15px;
  color: crimson;
  text-align: left;
  width: 100%;
  margin-top: 10px;
`;

export const Login = () => {
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    setError,
  } = useForm({
    mode: "onChange",
  });

  // console.log(errors);

  const onSubmit = (data) => {
    if (data.username !== userDb.username) {
      setError("username", {
        message: "아이디 틀림",
      });
    }

    if (data.password !== userDb.password) {
      setError("password", {
        message: "비번 틀림",
      });
    }

    nav("/");
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>LOGIN</Title>
        <Input
          {...register("username", {
            required: "아이디는 필수입니다",
          })}
          type="text"
          placeholder="아이디를 입력해 주세요."
        />
        <ErrorMessage>
          {errors.username?.message ? errors.username.message : ""}
        </ErrorMessage>

        <Input
          {...register("password", {
            required: "패스워드는 필수 입니다",
            minLength: {
              value: 8,
              message: "비번은 8자 이상",
            },
          })}
          type="password"
          placeholder="패스워드를 입력해 주세요."
        />
        <ErrorMessage>
          {errors.password?.message ? errors.password.message : ""}
        </ErrorMessage>

        <Button active={isValid}>로그인</Button>
      </Form>
    </Wrap>
  );
};
