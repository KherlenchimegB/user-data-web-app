const InputForm = (props) => {
  return (
    <div>
      <div className="flex flex-col gap-[3px]">
        <span>Name</span>
        <input
          className="h-[40px] border border-[#E4E4E7] rounded-md pl-4 w-full"
          type="text"
          onChange={(event) => {
            props.setFormData({ ...props.formData, name: event.target.value });
          }}
          onKeyDown={(event) => {
            props.handleKeyDown(event);
          }}
          value={props.formData.name}
        />
      </div>
      <div className="flex flex-col gap-[3px]">
        <span>Phone</span>
        <input
          className="h-[40px] border border-[#E4E4E7] rounded-md pl-4 w-full"
          type="tel"
          onChange={(event) => {
            props.setFormData({ ...props.formData, phone: event.target.value });
          }}
          onKeyDown={(event) => {
            props.handleKeyDown(event);
          }}
          value={props.formData.phone}
        />
      </div>
      <div className="flex flex-col gap-[3px]">
        <span>Email</span>
        <input
          className="h-[40px] border border-[#E4E4E7] rounded-md pl-4 w-full"
          type="email"
          onChange={(event) => {
            props.setFormData({ ...props.formData, email: event.target.value });
          }}
          onKeyDown={(event) => {
            props.handleKeyDown(event);
          }}
          value={props.formData.email}
        />
      </div>
    </div>
  );
};
export default InputForm;
