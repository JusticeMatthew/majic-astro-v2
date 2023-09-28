export default function Button({
  secondary,
  disabled,
  contact,
  children,
  ...props
}) {
  return (
    <button
      disabled={disabled}
      className={`${
        secondary
          ? 'text-blurple font-semibold'
          : 'font-medium bg-primary-gradient text-light disabled:opacity-50 disabled:pointer-events-none'
      } relative group tracking-wide p-1 text-lg rounded-full transition-all duration-75`}
      {...props}
    >
      <div
        className={`${
          secondary
            ? 'absolute rounded-full -inset-[0px] group-hover:blur z-10 border-[3px] border-blurple group-hover:bg-primary-gradient'
            : 'absolute rounded-full bg-primary-gradient -inset-[2px] z-10 group-hover:blur-md transition-all duration-75'
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
