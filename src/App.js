import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home/Home";
import Page from "./routes/pay-zakat/page";
import Donate from "./routes/donate/page";
import About from "./routes/about/page";
import Calculate from "./routes/calculate-zakat/page";
import { ToastContainer} from "react-toastify";
import { ChainProvider } from "./context/chain";
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <div className="App">
      
      
        <ChainProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pay-zakat" element={<Page />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculate-zakat" element={<Calculate />} />
        </Routes>
        <ToastContainer />   
      </ChainProvider>   
    </div>
  );
}

export default App;
