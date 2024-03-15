import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  let history = useNavigate();

  const [data, setData] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
  });

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const updatedData = {
      nome: data.nome,
      cognome: data.cognome,
      email: data.email,
      password: data.password,
    };

    setData(updatedData);

    console.log(updatedData);

    axios
      .post(
        "http://localhost/login-registration-form-php/signup.php",
        updatedData
      )
      .then(result => {
        if (result.data.Status == "Invalid") {
          alert("Invalid User");
        } else {
          history(`/SignIn`);
        }
      });
  };

  return (
    <div className="page">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">Inserisci il nome</label>
            <input
              className="login__input"
              placeholder="Mario"
              type="text"
              id="firstName"
              name="nome" // Corrected name attribute
              value={data.nome}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Inserisci il cognome</label>
            <input
              className="login__input"
              placeholder="Rossi"
              type="text"
              id="lastName"
              name="cognome"
              value={data.cognome}
              onChange={handleChange}
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
              value={data.email}
              onChange={handleChange}
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
              value={data.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">REGISTRATI</button>
        </form>
        <p className="register_warning">Hai già un account? Accedi</p>
      </div>
    </div>
  );
}

export default SignUp;
