import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInputs {
  name: string;
  birth: number;
  phone: number;
  email: string;
}

const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

export default function TestForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>({ mode: "onBlur" });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <label>이름</label>
      <input
        {...register("name", {
          required: true,
          maxLength: 5,
          pattern: /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,5}$/,
        })}
      />
      {errors?.name?.type === "required" && <p>이름을 입력해주세요</p>}
      {errors?.name?.type === "pattern" && <p>한글만 직접 입력해주세요</p>}

      <label>생년월일</label>
      <input
        {...register("birth", {
          required: true,
          maxLength: 10,
          pattern: /^(([0-9]+).{4}([0-9]+).{2}([0-9]+){2})/g,
        })}
      />
      {errors?.birth?.type === "required" && <p>생년월일을 입력해주세요</p>}
      {errors?.birth?.type === "pattern" && (
        <p>YYYY.MM.DD형식으로 입력해주세요</p>
      )}
      <label>연락처</label>
      <input
        {...register("phone", {
          required: true,
          maxLength: 11,
          pattern: /^[0-9]{11}/g,
        })}
      />
      {errors?.phone?.type === "required" && <p>연락처를 입력해주세요</p>}
      {errors?.phone?.type === "pattern" && <p>'-'없이 입력해주세요</p>}
      <label>이메일</label>
      <input
        {...register("email", {
          required: true,
          maxLength: undefined,
          pattern: /^[\w.]+@[\w.]+\.[A-Za-z]{2,3}$/i,
        })}
      />
      {errors?.email?.type === "required" && <p>이메일을 입력해주세요</p>}
      {errors?.email?.type === "pattern" && (
        <p>'@', '.com'을 포함하여 입력해주세요</p>
      )}
      <input type="submit" />
    </form>
  );
}
