export default function InputField({
  placeholder,
  type = "text",
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="
      w-full
      bg-slate-200
      text-black
      rounded-2xl
      px-5
      py-4
      outline-none
      border-2
      border-transparent
      focus:border-cyan-400
      transition-all
      duration-300
      "
    />
  );
}