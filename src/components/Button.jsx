export default function Button({
  secondary = false,
  disabled = false,
  contact = false,
  aria,
  children,
  ...props
}) {
  return (
    <button
      disabled={disabled}
      aria-label={aria}
      className={`${
        secondary ? 'font-medium text-light' : 'bg-primary-gradient text-light'
      } group relative cursor-pointer rounded-lg drop-shadow-xl transition-all duration-75 disabled:pointer-events-none disabled:opacity-50`}
      {...props}
    >
      <div
        className={`absolute -inset-[2px] z-10 rounded-lg group-hover:blur-lg ${
          secondary
            ? 'bg-blurple/40 backdrop-blur-lg group-hover:bg-blurple'
            : 'bg-secondary-gradient'
        }`}
      ></div>
      <span
        className={`nowrap relative z-20 block rounded-lg ${contact ? 'px-36' : 'px-huge'} py-small font-medium group-hover:bg-dark group-hover:text-light`}
      >
        {children}
      </span>
    </button>
  );
}
