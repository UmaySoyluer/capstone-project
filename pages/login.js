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
        <h2 style={{ color: "blue" }}>Please to log in below</h2>
        <form onSubmit={handleLogin}>
          <div style={{ margin: "10px" }}>
            <label style={{ color: "blue" }}>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <label style={{ color: "blue" }}>Password:</label>
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
