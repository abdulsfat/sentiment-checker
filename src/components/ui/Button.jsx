const Button = (props) => {
  return (
    <button
      type="submit"
      className="px-4 py-2 font-bold text-white bg-indigo-500 rounded-lg me-2 hover:bg-indigo-700"
      // eslint-disable-next-line react/prop-types
    >
      {props.children}
    </button>
  );
};

export default Button;
