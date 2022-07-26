import React from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  placeholder: string;
  name: string;
  options: any;
};

const Input = ({ placeholder, name, options }: Props) => {
  const { register } = useFormContext();

  return (
    <>
      <input placeholder={placeholder} {...register(name, options)} />
    </>
  );
};

export default Input;
