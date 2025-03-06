import React, { useState } from "react";
import axios from "axios";
import "./Register.css"; // Make sure this CSS file exists and follows the previous styling

export default function Register() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let item = { name: Name, email: Email, password: Pass, amount: 1000 };

    axios.post("https://bank-server-wh3o.onrender.com/create", item)
      .then(() => alert("Submitted Successfully"))
      .catch((error) => alert("Error submitting data: " + error));
  }

  return (
    <div className="register-container">
      <div className="overlay"></div> {/* Full-screen overlay */}

      <form className="register-form" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input type="text" value={Name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={Pass} onChange={(e) => setPass(e.target.value)} placeholder="Password" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
