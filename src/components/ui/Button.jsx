/* eslint-disable react/prop-types */
const Button = (props) => {
  const { type, style, children } = props;

  // Menggabungkan kelas Tailwind dengan prop style tambahan
  const buttonClasses = `px-4 py-2 font-bold text-white bg-indigo-500 rounded-xl me-2 ${style} transition duration-300 ease-in-out hover:bg-indigo-700`;

  return (
    <button type={type} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
