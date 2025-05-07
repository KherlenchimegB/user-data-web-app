import { useState } from "react";
import User from "./components/User";
import Button from "./components/Button";
let editedUserId = 0;
let users = [
  {
    name: "Kherlenchimeg",
    phone: "99887080",
    email: "b.kherlenchimeg@gmail.com",
    id: 1111,
  },
  {
    name: "Bold",
    phone: "91992810",
    email: "tungalag@gmail.com",
    id: 2222,
  },
  {
    name: "Dorj",
    phone: "88888888",
    email: "dorj@gmail.com",
    id: 3333,
  },
  {
    name: "Dulam",
    phone: "99999999",
    email: "dulam@gmail.com",
    id: 4444,
  },
  {
    name: "Batsuren",
    phone: "88112233",
    email: "bat@gmail.com",
    id: 5555,
  },
];
function App() {
  let [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  let [data, setData] = useState(users);
  let [filteredData, setFilteredData] = useState(data);
  let [inputSearch, setInputSearch] = useState("");
  let [activeButtonName, setActiveButtonName] = useState("Add User");

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
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
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
  const searchByUser = (name) => {
    const filteredData = data.filter((data) => data.name !== name);
    setFilteredData(filteredData);
    setFormData({ ...formData, name: "", phone: "", email: "" });
  };
  return (
    <div className="flex flex-col bg-[#F3F4F6] items-center w-screen h-screen gap-[20px]">
      <h1 className="mt-[50px] font-semibold">User Management</h1>

      {/* add user form */}

      <div className="flex flex-col w-[440px] bg-white size-fit rounded-md p-[16px] gap-[13px]">
        <div className="flex flex-col gap-[3px]">
          <span>Name</span>
          <input
            className="h-[40px] border border-[#E4E4E7] rounded-md pl-4 w-full"
            type="text"
            onChange={(event) => {
              setFormData({ ...formData, name: event.target.value });
            }}
            onKeyDown={(event) => {
              handleKeyDown(event);
            }}
            value={formData.name}
          />
        </div>
        <div className="flex flex-col gap-[3px]">
          <span>Phone</span>
          <input
            className="h-[40px] border border-[#E4E4E7] rounded-md pl-4 w-full"
            type="tel"
            onChange={(event) => {
              setFormData({ ...formData, phone: event.target.value });
            }}
            onKeyDown={(event) => {
              handleKeyDown(event);
            }}
            value={formData.phone}
          />
        </div>
        <div className="flex flex-col gap-[3px]">
          <span>Email</span>
          <input
            className="h-[40px] border border-[#E4E4E7] rounded-md pl-4 w-full"
            type="email"
            onChange={(event) => {
              setFormData({ ...formData, email: event.target.value });
            }}
            onKeyDown={(event) => {
              handleKeyDown(event);
            }}
            value={formData.email}
          />
        </div>

        {/* Button soligdoh */}

        {activeButtonName === "Add User" && (
          <Button name={activeButtonName} handleFunction={addUser} />
        )}
        {activeButtonName === "Update User" && (
          <Button name={activeButtonName} handleFunction={updateUser} />
        )}
      </div>

      {/* Search */}
      {data.length !== 0 && (
        <div className="bg-[#3C82F6] flex w-fit text-black rounded-md px-[10px] py-[5px] gap-2">
          {/* <span>Search by:</span> */}
          <input
            className="pl-1"
            type="search"
            // onChange={}
            placeholder="name"
            // value={searchName}
          />
          <button onClick={searchByUser}>Search</button>
        </div>
      )}
      {/* data print */}

      {data.map((user) => {
        return (
          <User
            name={user.name}
            phone={user.phone}
            email={user.email}
            id={user.id}
            deleteUser={deleteUser}
            editUser={editUser}
            key={user.id}
          />
        );
      })}
    </div>
  );
}

export default App;
