import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="container">
        <form action="login.php" method="post">
          <div className="form-group">
            <label htmlFor="email">Inserisci l’e-mail</label>
            <input
              className="login__input"
              placeholder="name@example.com"
              type="email"
              id="email"
              name="email"
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
              required
            />
          </div>
          <button type="submit">ACCEDI</button>
        </form>
        <p className="register_warning">
          Non hai ancora un profilo? Registrati
        </p>
      </div>
    </div>
  );
}

export default App;
