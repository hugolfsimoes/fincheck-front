import { ComponentProps, forwardRef } from "react";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { cn } from "../../app/utils/cn";

interface InputProps extends ComponentProps<"input"> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, name, id, error, className, ...props }: InputProps, ref) => {
    const inputId = id ?? name;
    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          className={cn(
            "bg-white rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 w-full pt-4  peer placeholder-shown:pt-0 focus:border-gray-800 transition-all outline-none focus:ring-0",
            error && "border-red-900 focus:border-red-900",
            className
          )}
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
        {error && (
          <div className="flex items-center gap-2 mt-2 text-red-900 text-xs">
            <CrossCircledIcon />
            <span>{error}</span>
          </div>
        )}
      </div>
    );
  }
);
