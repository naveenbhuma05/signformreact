import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confrimpassword: ""
  });
  const { username, email, password, confrimpassword } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };
  function submitHandler(e) {
    e.preventDefault();
    if (password === confrimpassword) {
      console.log(data);
    } else {
      console.log("password not matching");
    }
  }
  return (
    <div>
      <center>
        <p> welcome </p>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="username"
            placeholder="uname"
            value={username}
            onChange={changeHandler}
          />{" "}
          <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={changeHandler}
          />{" "}
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
          />{" "}
          <br />
          <input
            type="password"
            name="confrimpassword"
            value={confrimpassword}
            onChange={changeHandler}
          />
          <input type="submit" name="submit" /> <br />
        </form>
      </center>
    </div>
  );
};
export default App;
