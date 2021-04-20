import "./App.css";
import { FloristeriaForm } from "./FloristeriaForm";

function App() {
  return (
    <div className="container-fluid">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          href="/"
        >
          <span className="fs-4">Floristería Dulces Pétalos</span>
        </a>
        <ul className="nav nav-pills offset-1">
          <li className="nav-item">
            <a className="nav-link active">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link ">Details</a>
          </li>
        </ul>
      </header>

      <div className="App">
        <FloristeriaForm />
      </div>
    </div>
  );
}

export default App;
