import "./App.css";
import { FloristeriaForm } from "./FloristeriaForm";

function App() {
  return (
    <div className="container-fluid">
      <div className="header">
        <h1>Floristeria</h1>
      </div>

      <div className="App">
        <FloristeriaForm />
      </div>
    </div>
  );
}

export default App;
