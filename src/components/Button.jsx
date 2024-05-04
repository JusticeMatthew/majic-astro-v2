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
        secondary
          ? 'text-blurple font-semibold'
          : 'font-medium bg-primary-gradient text-light'
      } relative group tracking-wide p-1 text-lg rounded-full transition-all duration-75 disabled:opacity-50 disabled:pointer-events-none`}
      {...props}
    >
      <div
        className={`absolute rounded-full z-10 ${
          secondary
            ? '-inset-[0px] group-hover:blur border-[3px] border-blurple group-hover:bg-primary-gradient'
            : 'bg-primary-gradient -inset-[2px] group-hover:blur-md transition-all duration-75'
        }`}
      ></div>
      <span
        className={`py-3 relative z-20 block rounded-full group-hover:bg-dark transition-all duration-75 ${
          contact ? 'px-32' : 'px-12'
        }`}
      >
        {children}
      </span>
    </button>
  );
}
