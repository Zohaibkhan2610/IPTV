import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" Component={Home}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
