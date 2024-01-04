import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Interface from "./Components/Interface";

import "./styles/app.scss";
import "./styles/about.scss";
// import "./styles/header.scss";
import "./styles/interface.scss";
import "./styles/contact.scss";

const App = () => {
  return(
    <>
    <Router>
      {/* <Header /> */}
      <Routes>
          <Route path="*" element={<Interface />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/About" element={<About />} />
      </Routes>

    </Router>
    </>
  )
}

export default App;
