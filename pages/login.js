import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username === user.username) {
      try {
        const passwordMatch = await bcrypt.compare(
          password,
          user.hashedPassword
        );
        if (passwordMatch) {
          console.log("Login successful");
        } else {
          console.log("Invalid password");
        }
      } catch (error) {
        console.error("Error during password comparison", error);
      }
    } else {
      console.log("Invalid username");
    }
  };

  const handleBackHome = () => {
    console.log("Back to home");
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
      <div style={{ position: "absolute", top: "70px", left: "20px" }}>
        <button
          style={{
            color: "black",
            backgroundColor: "blue",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handleBackHome}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "gray";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "blue";
          }}
        >
          Back Home
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ color: "blue" }}>Please to log in below</h2>
        <form onSubmit={handleLogin}>
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
                color: "black",
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
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;