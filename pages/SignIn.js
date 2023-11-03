import { signIn, signOut } from "next-auth/react";

const SignInPage = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Welcome to Proflow</h2>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          fontWeight: "bold",
          backgroundColor: "#3498DB",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s, color 0.3s",
        }}
        onClick={() => signIn("github")}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#7F8C8D";
          e.target.style.color = "black";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "#3498DB";
          e.target.style.color = "white";
        }}
      >
        Sign in with GitHub
      </button>
    </div>
  );
};

export default SignInPage;
