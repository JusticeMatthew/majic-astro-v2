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
        secondary ? 'font-medium text-light' : 'bg-primary-gradient text-light'
      } ${margin} group relative rounded-lg drop-shadow-xl transition-all duration-75 disabled:pointer-events-none disabled:opacity-50`}
      {...props}
    >
      <div
        className={`absolute -inset-[2px] z-10 rounded-lg group-hover:blur-lg ${
          secondary
            ? 'bg-blurple/40 backdrop-blur-lg group-hover:bg-primary-gradient'
            : 'bg-primary-gradient'
        }`}
      ></div>
      <span className="nowrap relative z-20 block rounded-lg px-huge py-small group-hover:bg-dark">
        {children}
      </span>
    </button>
  );
}
