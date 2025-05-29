export function Button(props: React.ComponentProps<"button">) {
  return (
    <button
      {...props}
      className="bg-teal-900 t hover:bg-teal-800 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed text-white rounded-lg px-6 h-12 rounded-r-2xl font-medium transition-all "
    >
      Entrar
    </button>
  );
}
