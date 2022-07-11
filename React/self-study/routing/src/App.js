import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        {/* <RouteTest /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
