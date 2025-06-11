import { cn } from "../../app/utils/cn";

export function Button({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      {...props}
      className={cn(
        "bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed text-white px-6 h-12 rounded-2xl font-medium transition-all",
        className
      )}
    >
      {children}
    </button>
  );
}
