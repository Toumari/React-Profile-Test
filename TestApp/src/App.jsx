import { useState } from "react";
import reactLogo from "./assets/react.svg";
import NavBar from "./components/NavBar";
import Main from "./components/MainContent";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
