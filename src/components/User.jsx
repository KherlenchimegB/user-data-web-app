const User = (props) => {
  return (
    <div className="w-[440px] flex items-center justify-between bg-white size-fit rounded-md p-[16px] gap-[13px]">
      <div className="flex flex-col gap-1">
        <span className="font-semibold text-md">{props.name}</span>
        <div className="flex gap-[10px] text-xs">
          <img className="w-4 h-4" src="./images/phone.svg" alt="phone icon" />
          <span>{props.phone}</span>
        </div>
        <div className="flex gap-[10px] text-xs">
          <img className="w-4 h-4" src="./images/email.svg" alt="email icon" />
          <span>{props.email}</span>
        </div>
      </div>

      <div className="flex gap-[10px]">
        <button
          onClick={() => props.editUser(props.id)}
          className="bg-yellow-500 rounded-md px-[10px] py-[5px] border"
        >
          Edit
        </button>
        <button
          onClick={() => props.deleteUser(props.id)}
          className="bg-red-600 text-white rounded-md px-[10px] py-[5px] border"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default User;
