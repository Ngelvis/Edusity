import React, { useState, useEffect } from "react";

export const Raw = () => {
  // React Form Method One

  // const [userName, setUserName] = useState('')
  // const [userEmail, setUserEmail] = useState('')
  // React Form Method Two
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.userName) {
      newErrors.userName = "Name is required";
    }

    if (!formData.userEmail) {
      newErrors.userEmail = "Email is required";
    }

    setError(newErrors);

    if (Object.keys(newErrors).length === 0);
  };

  // useState
  const [count, setCount] = useState(0);

  // useEffect
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);

      alert(`You can't remove anymore items`);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        border: "1px solid black",
        borderRadius: "5px",
        boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.2)",
        outline: "none",
      }}
    >
      <p>You clicked {count} times</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px",
          border: "none",
          cursor: "pointer",
          fontSize: "20px",
          fontWeight: "bold",
          borderRadius: "5px",
          boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.2)",
          outline: "none",
        }}
      >
        Click me
      </button>
      <br /> <br /> <br />
      {error.userName && <span></span>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Your Name:
          <input
            type="text"
            name="username"
            value={formData.userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <br /> <br /> <br />
        <label htmlFor="">
          Your Email:
          <input
            type="email"
            name="email"
            value={formData.userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </label>
        <br /> <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
