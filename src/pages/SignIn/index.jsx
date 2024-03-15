import { useState } from "react";
import axios from "axios";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post("/login.php", { email, password });
      console.log(response.data); // Log response from backend for debugging

      // Assuming the backend responds with a success message
      alert("Login successful"); // You can replace this with your redirect logic
    } catch (error) {
      console.error("Error:", error.response.data); // Log error for debugging
      setError("Invalid email or password"); // Update error state
    }
  };

  return (
    <div className="page">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Inserisci l’e-mail</label>
            <input
              className="login__input"
              placeholder="name@example.com"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Inserisci la password</label>
            <input
              className="login__input"
              placeholder="Scrivila qui"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}{" "}
          {/* Display error message if there's an error */}
          <button type="submit">ACCEDI</button>
        </form>
        <p className="register_warning">
          Non hai ancora un profilo? Registrati
        </p>
      </div>
    </div>
  );
}

export default SignIn;
