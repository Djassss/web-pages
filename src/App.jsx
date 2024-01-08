import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Interface from "./Components/Interface";
import Login from "./Components/Login";
import Register from "./Components/Register";

import "./styles/app.scss";
import "./styles/about.scss";
import "./styles/interface.scss";
import "./styles/contact.scss";


const App = () => {
  return(
    <>
    <Router>
      <Routes>
          <Route path="*" element={<Interface />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
