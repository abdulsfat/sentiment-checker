const Button = (props) => {
  return (
    <div className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg me-2 hover:bg-blue-700 ">
      {children}
    </div>
  );
};

export default Button;
