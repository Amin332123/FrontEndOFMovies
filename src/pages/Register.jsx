import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [datamsg , setdataMsg] = useState('');
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Use the IP of your Laravel laptop here!
    const res = await axios.post("http://localhost:8000/api/register", formData);
    setdataMsg(res.data.message);
  };

  return (
    <div className="auth-container">
      <h3 style={{color:'red'}}>{datamsg}</h3>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} placeholder="Full Name" />
        <input name="email" onChange={handleChange} placeholder="Email" />
        <input type="password" name="password" onChange={handleChange} placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;