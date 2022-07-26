import type { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  kind?: "text" | "phone" | "price";
  register: UseFormRegisterReturn;
  type?: string;
  required?: boolean;
}

export default function Input({
  label,
  name,
  kind = "text",
  register,
  type = "text",
  required = false,
}: Props) {
  return (
    <div>
      <label htmlFor={name} className="text-sm text-gray-700 font-medium mb-1">
        {label}
      </label>
      {kind === "text" && (
        <input
          id={name}
          {...register}
          type={type}
          required={required}
          className="appearance-none w-full shadow-sm placeholder-gray-400 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
      )}
      {kind === "phone" && (
        <div className="flex shadow-sm rounded-md">
          <span className="flex justify-center items-center bg-gray-50 text-sm text-gray-500 select-none px-3 border border-r-0 border-gray-300 rounded-l-md">
            +82
          </span>
          <input
            id={name}
            {...register}
            type={type}
            required={required}
            className="appearance-none w-full shadow-sm placeholder-gray-400 px-3 py-2 border border-gray-300 rounded-md rounded-l-none focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      )}
      {kind === "price" && (
        <div className="relative flex items-center shadow-sm rounded-md">
          <div className="absolute left-0 flex justify-center items-center pointer-events-none pl-3">
            <span className="text-sm text-gray-500">￦</span>
          </div>
          <input
            id="price"
            type="text"
            placeholder="0.00"
            className="appearance-none w-full shadow-sm placeholder-gray-400 px-3 py-2 pl-7 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
          <div className="absolute right-0 flex justify-center items-center pointer-events-none pr-3">
            <span className="text-gray-500">KRW</span>
          </div>
        </div>
      )}
    </div>
  );
}