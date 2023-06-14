
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home/>
              
            </div>
          }
        ></Route>

        <Route path="/about" element={<About/>}></Route>
        <Route path="/services"></Route>
        <Route path="/education"></Route>
        <Route path="/contact"></Route>
        
      </Routes>
    </Router>
  );
}

export default App;
