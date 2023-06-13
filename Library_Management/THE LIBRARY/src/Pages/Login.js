import { React, useState } from "react";
import "./Login.css";
import img from "../asserts/bg.webp";


const Login = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


  const onSubmitHandler = () => {
    var pattern_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (username == "") {
      window.alert("please enter a valid username");
    } else if (!pattern_email.test(email)) {
      window.alert("please enter a valid email");
    } else if (phone == "") {
      window.alert("please enter a valid phone number");
    } else {
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("phone", phone);
      setEmail("");
      setPhone("");
      setUsername("");
      props.setLogin(false);
    }
  };

  return (
    <div className="outer-login">
      <img id={"bg-img"} src={img}></img>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
        }}
      >
        <section>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </section>
      </div>
      <div className="inner-login">
        <h3 id={"login-label"}>WELCOME</h3>

        <input
          type={"text"}
          name={"username"}
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          placeholder={"Name"}
        ></input>
        <input
          type={"email"}
          name={"email"}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder={"Mail ID"}
        ></input>
        <input
          type={"text"}
          name={"Phone"}
          value={phone}
          onChange={(event) => {
            setPhone(event.target.value);
          }}
          placeholder={"Mobile number"}
        ></input>
        <button className="submit" onClick={onSubmitHandler}>
          ENTER
        </button>
      </div>
    </div>
  );
};

export default Login;
