import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    const formData = {
      username: username,
      email: email,
      password: password,
    };
    console.log("Form data:", formData);
  };

  const handleCancel = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const handleHome = () => {
    console.log("Navigate to the home page");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
          }}
        >
          <button
            onClick={handleHome}
            style={{
              color: "white",
              backgroundColor: "green",
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Home
          </button>
        </div>
        <h2 style={{ color: "blue" }}>Create an account</h2>
        <form onSubmit={handleSignup}>
          <div style={{ margin: "10px" }}>
            <label style={{ color: "blue", marginRight: "10px" }}>
              Username:
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <label style={{ color: "blue", marginRight: "10px" }}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <label style={{ color: "blue", marginRight: "10px" }}>
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <button
              type="submit"
              style={{
                color: "white",
                backgroundColor: "blue",
                padding: "10px 20px",
                border: "none",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "gray";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "blue";
              }}
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={handleCancel}
              style={{
                color: "white",
                backgroundColor: "red",
                padding: "10px 20px",
                border: "none",
                cursor: "pointer",
                marginLeft: "10px",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "darkred";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "red";
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
