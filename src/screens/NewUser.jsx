import React, { useRef, useState } from "react";
import { addUser } from "../services/user.service";

const NewUser = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const form = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ email, firstname, lastname })
      .then((res) => {
        setEmail("")
        setFirstname("")
        setLastname("")
      })
      .catch((err) => {
        alert("Can't add user.")
      });
  };

  return (
    <form ref={form}>
      <hr />
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>Firstname</label>
      <input
        type="text"
        name="firstname"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
      <br />
      <label>Lastname</label>
      <input
        type="text"
        name="lastname"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />
      <hr />
      <input type="submit" value="submit" onClick={handleSubmit} />
    </form>
  );
};

export default NewUser;
