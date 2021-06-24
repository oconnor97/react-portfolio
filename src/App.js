import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
