function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  disabled = false,
}) {
  const baseStyles =
    "rounded-lg px-5 py-2.5 text-sm font-medium transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-950";

  const variants = {
    primary:
      "bg-white text-slate-900 hover:bg-slate-200",

    secondary:
      "border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;