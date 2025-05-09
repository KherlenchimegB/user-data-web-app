import { useState } from "react";
import User from "./components/User";
import { Button, SearchByNameButton, SortButton } from "./components/Button";
import InputForm from "./components/InputForm";
let sortedName = [];
let editedUserId = 0;
let users = [
  {
    name: "kherlenchimeg",
    phone: "99887080",
    email: "b.kherlenchimeg@gmail.com",
    id: 1111,
  },
  {
    name: "bold",
    phone: "91992810",
    email: "bold@gmail.com",
    id: 2222,
  },
  {
    name: "dorj",
    phone: "88888888",
    email: "dorj@gmail.com",
    id: 3333,
  },
];

function App() {
  let [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [data, setData] = useState(users);
  const [filteredData, setFilteredData] = useState(data);
  const [inputSearch, setInputSearch] = useState("");
  const [activeButtonName, setActiveButtonName] = useState("Add User");

  const addUser = () => {
    if (
      formData.name === "" ||
      formData.phone === "" ||
      formData.email === ""
    ) {
      alert("Please enter a info!");
      return;
    }
    const newUser = {
      name: formData.name.toLowerCase(),
      phone: formData.phone,
      email: formData.email.toLowerCase(),
      id: Date.now(),
    };
    setData([...data, newUser]);
    setFormData({ ...formData, name: "", phone: "", email: "" });
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addUser();
    }
  };
  const searchKeyDown = (event) => {
    if (event.key === "Enter") {
      searchByName();
    }
  };
  const deleteUser = (id) => {
    const filteredData = data.filter((data) => data.id !== id);
    setData(filteredData);
  };
  const editUser = (id) => {
    const filteredData = data.filter((data) => data.id === id);
    setFormData({
      ...formData,
      name: filteredData[0].name,
      phone: filteredData[0].phone,
      email: filteredData[0].email,
    });
    editedUserId = filteredData[0].id;
    setActiveButtonName("Update User");
  };
  const updateUser = (id) => {
    const updatedUser = data.map((user) => {
      if (user.id === editedUserId) {
        user.name = formData.name;
        user.phone = formData.phone;
        user.email = formData.email;
        return user;
      }
      return user;
    });
    setData(updatedUser);
    setFormData({ ...formData, name: "", phone: "", email: "" });
    setActiveButtonName("Add User");
  };
  const searchByName = () => {
    let filteredData = data.filter((data) => data.name === inputSearch);
    setFilteredData(filteredData);
  };
  const sort = () => {
    let newArray = [];
    newArray = data.map((data) => [...newArray, data.name]);
    sortedName = newArray.sort();
    let sortodData = [];
    let sortodUser = [];
    sortedName.map((Name) => {
      sortodUser = data.filter((user) => user.name === Name[0]);
      sortodData.push(sortodUser[0]);
      sortedName = [];
    });
    setData(sortodData);
  };

  return (
    <div className="flex flex-col bg-[#F3F4F6] items-center w-screen h-screen gap-[20px]">
      <h1 className="mt-[50px] font-semibold text-2xl">User Management</h1>

      {/* add user form */}
      <div className="flex flex-col w-[440px] bg-white rounded-md p-[16px] gap-[13px]">
        <InputForm
          setFormData={setFormData}
          handleKeyDown={handleKeyDown}
          formData={formData}
          searchByName={searchByName}
        />

        {/* Button soligdoh */}
        {activeButtonName === "Add User" && (
          <Button name={activeButtonName} handleFunction={addUser} />
        )}
        {activeButtonName === "Update User" && (
          <Button name={activeButtonName} handleFunction={updateUser} />
        )}
      </div>

      {/* Search button*/}
      {data.length !== 0 && (
        <SearchByNameButton
          setInputSearch={setInputSearch}
          inputSearch={inputSearch}
          searchByName={searchByName}
          searchKeyDown={searchKeyDown}
        />
      )}

      <SortButton handleFunction={sort} />
      {/* search print */}
      {inputSearch !== "" &&
        filteredData.map((user) => {
          return <User {...user} deleteUser={deleteUser} editUser={editUser} />;
        })}

      {/* data $ sort print */}
      {inputSearch === "" &&
        data.map((user) => {
          return <User {...user} deleteUser={deleteUser} editUser={editUser} />;
        })}
    </div>
  );
}
export default App;
