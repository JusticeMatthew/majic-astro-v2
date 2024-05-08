export default function Button({
  secondary = false,
  disabled = false,
  contact = false,
  aria,
  children,
  padding = '',
  ...props
}) {
  return (
    <button
      disabled={disabled}
      aria-label={aria}
      className={`${
        secondary
          ? 'text-blurple font-medium'
          : 'bg-primary-gradient text-light'
      } ${padding} relative group tracking-wide rounded-full transition-all duration-75 disabled:opacity-50 disabled:pointer-events-none`}
      {...props}
    >
      <div
        className={`absolute rounded-full z-10 ${
          secondary
            ? '-inset-[0px] group-hover:blur border-[3px] border-blurple group-hover:bg-primary-gradient backdrop-blur-md'
            : 'bg-primary-gradient -inset-[2px] group-hover:blur-md transition-all duration-75'
        }`}
      ></div>
      <span className="py-small relative z-20 block rounded-full group-hover:bg-dark transition-all duration-75 px-huge">
        {children}
      </span>
    </button>
  );
}
