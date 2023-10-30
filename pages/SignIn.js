import { signIn, signOut, useSession } from "next-auth/react";

const SignInPage = () => {
  const session = useSession();
  console.log(session);

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

      <button
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          padding: "10px 20px",
          fontSize: "14px",
          fontWeight: "bold",
          backgroundColor: "#E74C3C",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s, color 0.3s",
        }}
        onClick={() => signOut()}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#7F8C8D";
          e.target.style.color = "black";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "#E74C3C";
          e.target.style.color = "white";
        }}
      >
        Back Home
      </button>
    </div>
  );
};

export default SignInPage;
