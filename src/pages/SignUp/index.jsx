import { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState(""); // New state for first name
  const [lastName, setLastName] = useState(""); // New state for last name
  const [error, setError] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post("/signup.php", {
        // Assuming signup endpoint
        email,
        password,
        firstName, // Include first name in the request
        lastName, // Include last name in the request
      });
      console.log(response.data); // Log response from backend for debugging

      // Assuming the backend responds with a success message
      alert("Registration successful"); // You can replace this with your redirect logic
    } catch (error) {
      console.error("Error:", error.response.data); // Log error for debugging
      setError("Registration failed"); // Update error state
    }
  };

  return (
    <div className="page">
      <Navbar />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">Inserisci il nome</label>
            <input
              className="login__input"
              placeholder="Mario"
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Inserisci il cognome</label>
            <input
              className="login__input"
              placeholder="Rossi"
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Inserisci l’email</label>
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
          <button type="submit">REGISTRATI</button>
        </form>
        <p className="register_warning">Hai già un account? Accedi</p>
      </div>
    </div>
  );
}

export default SignUp;
