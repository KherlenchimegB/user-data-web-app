export const Button = (props) => {
  return (
    <button
      onClick={props.handleFunction}
      className="bg-[#3C82F6] w-fit text-white rounded-md px-[10px] py-[5px]"
    >
      {props.name}
    </button>
  );
};

export const SortButton = (props) => {
  return (
    <div>
      <button
        className=" bg-[#3C82F6] text-white border-none rounded-sm w-fit px-[10px] py-[5px] gap-2"
        onClick={props.handleFunction}
      >
        Sort (A-Z)
      </button>
    </div>
  );
};

export const SearchByNameButton = (props) => {
  return (
    <div className="bg-[#3C82F6] flex w-fit rounded-md px-[10px] py-[5px] gap-2">
      <input
        className="pl-1"
        type="search"
        onChange={(e) => {
          props.setInputSearch(e.target.value);
        }}
        placeholder="name"
        value={props.inputSearch}
        onKeyDown={(event) => {
          props.searchKeyDown(event);
        }}
      />
      <button
        className="text-white "
        key="name"
        onClick={() => props.searchByName()}
      >
        Search
      </button>
    </div>
  );
};
