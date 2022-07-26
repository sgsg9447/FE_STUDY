import { useForm, FormProvider } from "react-hook-form";
import Input from "./Input";

interface IFormInputs {
  username: string;
  birth: number;
  phone: number;
  email: string;
}

export default function Form() {
  const methods = useForm<IFormInputs>({ mode: "onBlur" });
  const {
    formState: { errors },
  } = methods;

  const onSubmit = (data: any) => console.log(data);

  // const {
  //   formState: { errors },
  // } = useForm<IFormInputs>({ mode: "onBlur" });
  // console.log(errors);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <label>이름</label>
        <Input
          placeholder="홍길동"
          name="username"
          options={{
            required: true,
            maxLength: 4,
            pattern: /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,5}$/,
          }}
        />
        {errors?.username?.type && <p>이름을 입력해주세요</p>}

        <label>생년월일</label>
        <Input
          placeholder="YYYY.MM.DD"
          name="birth"
          options={{
            required: true,
            maxLength: 10,
            pattern: /^(([0-9]+).{4}([0-9]+).{2}([0-9]+){2})/g,
          }}
        />
        {errors?.birth?.type && <p>생년월일을 입력해주세요</p>}
        {errors?.birth?.type && <p>YYYY.MM.DD형식으로 입력해주세요</p>}
        <label>연락처</label>

        <Input
          placeholder="'-'제외하고입력"
          name={"phone"}
          options={{ required: true, maxLength: 11, pattern: /^[0-9]{11}/g }}
        />
        {errors?.phone?.type && <p>연락처를 입력해주세요</p>}
        {/* {errors?.phone?.type === "pattern" && <p>'-'없이 입력해주세요</p>} */}
        <label>이메일</label>
        <Input
          placeholder="'@', '.com'포함해주세요"
          name={"email"}
          options={{
            required: true,
            maxLength: undefined,
            pattern: /^[\w.]+@[\w.]+\.[A-Za-z]{2,3}$/i,
          }}
        />
        {errors?.email?.type === "required" && <p>이메일을 입력해주세요</p>}
        {errors?.email?.type === "pattern" && (
          <p>'@', '.com'을 포함하여 입력해주세요</p>
        )}
        <input type="submit" />
      </form>
    </FormProvider>
  );
}
