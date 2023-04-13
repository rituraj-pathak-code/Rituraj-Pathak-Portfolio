import "./App.css";
import Home from "./components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className={loading ? "app_loading" : "App"}>
      {loading ? (
        <HashLoader
          color={"#c6f55a"}
          loading={loading}
          size={50}
          className="loader"
        />
      ) : (
        <Router>
          <Home />
        </Router>
      )}
    </div>
  );
}

export default App;
