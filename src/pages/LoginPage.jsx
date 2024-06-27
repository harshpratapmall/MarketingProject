import { useState } from "react";
import styles from './LoginPage.module.css'

// Login Page Component (Basic example, replace with authentication logic)
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Replace with actual authentication logic
    if (username === "admin" && password === "password") {
      localStorage.setItem("isLoggedIn", true); // Simulate login state
      window.location.href = "/"; // Redirect to landing page after successful login
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className={styles.login_page}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
