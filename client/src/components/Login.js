import React from "react";
import Input from "../Input";
import Auth from "../Auth";
import { useHistory } from "react-router-dom";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [username, setusername, handleUsername] = Input("");
  const [pass, setPass, handlePass] = Input("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: pass,
    };
    Auth()
      .post("/api/login", data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        history.push("/protected");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => handleUsername(e.target.value)}
        ></input>
        <label>password</label>
        <input
          type="text"
          name="pass"
          value={pass}
          onChange={(e) => handlePass(e.target.value)}
        ></input>
        {/* Lambda School i<3Lambd4 */}
        <button type="submit">login</button>
      </form>
    </>
  );
};

export default Login;
