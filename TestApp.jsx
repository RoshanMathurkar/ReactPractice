import { useState } from "react";
import TestTable from "./TestTable";
import { use } from "react";

const TestApp = () => {
  const [userData, setUserData] = useState({
    name: "Roshan",
    email: "roshan@gmail.com",
    password: "123456",
  });

  const [data, setData] = useState([]);

  const handleChange = (event) => {
    // console.log(event);
    const {
      target: { name, value },
    } = event;

    // console.log(name);
    // console.log(value);

    // We need to spread the previous state and change the one we're targeting, so other data cannot be lost.
    setUserData((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  const handleDelete = (index) => {
    console.log(index);
    setData((preData) => preData.filter((ele, ind) => ind !== index));
  };

  const addUserData = (data) => {
    setData((prevdata) => [...prevdata, data]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUserData(userData);
    setUserData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <h1>Test App Component</h1>

      <form className="p-2 m-2 border" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className="m-2"
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">email</label>
        <input
          className="m-2"
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          className="m-2"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <br />
        <button>Submit</button>
      </form>
      <TestTable data={data} handleDelete={handleDelete} />
    </>
  );
};

export default TestApp;
