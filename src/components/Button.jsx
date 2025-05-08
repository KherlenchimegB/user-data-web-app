const Button = (props) => {
  return (
    <button
      onClick={props.handleFunction}
      className="bg-[#3C82F6] w-fit text-white rounded-md px-[10px] py-[5px]"
    >
      {props.name}
    </button>
  );
};
export default Button;
