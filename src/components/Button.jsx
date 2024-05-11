export default function Button({
  secondary = false,
  disabled = false,
  contact = false,
  aria,
  children,
  margin = '',
  ...props
}) {
  return (
    <button
      disabled={disabled}
      aria-label={aria}
      className={`${
        secondary ? 'text-light font-medium' : 'bg-primary-gradient text-light'
      } ${margin} relative group rounded-lg transition-all drop-shadow-xl duration-75 disabled:opacity-50 disabled:pointer-events-none`}
      {...props}
    >
      <div
        className={`absolute rounded-lg z-10 -inset-[2px] group-hover:blur-lg ${
          secondary
            ? 'group-hover:bg-primary-gradient backdrop-blur-lg bg-blurple/40'
            : 'bg-primary-gradient'
        }`}
      ></div>
      <span className="py-small relative z-20 block rounded-lg group-hover:bg-dark px-huge nowrap">
        {children}
      </span>
    </button>
  );
}
