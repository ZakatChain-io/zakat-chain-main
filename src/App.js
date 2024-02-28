import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home/Home";
import Page from "./routes/pay/page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} /> */}
        <Route path="/pay" element={<Page />} />
      </Routes>
    </div>
  );
}

export default App;
