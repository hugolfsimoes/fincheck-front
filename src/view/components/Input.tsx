import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<"input"> {
  name: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, name, id, ...props }: InputProps, ref) => {
    const inputId = id ?? name;
    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          className="bg-white rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 w-full pt-4  peer placeholder-shown:pt-0 focus:border-gray-800 transition-all outline-none focus:ring-0"
          id={inputId}
          name={name}
          placeholder=""
        />
        <label
          className="absolute text-xs top-2 left-[13px] pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
          htmlFor={inputId}
        >
          {placeholder}
        </label>
      </div>
    );
  }
);
