import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Home from "./sections/Home";
import Donate from "./sections/Donate";
import Projects from "./sections/Projects";
import Reports from "./sections/Reports";
import Dashboard from "./sections/Dashboard";
import Leaderboard from "./sections/Leaderboard";
import Admin from "./sections/Admin";
import About from "./sections/About";
import FAQ from "./sections/FAQ";
import Terms from "./sections/Terms";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const PAGES = {
    home: <Home />,
    donate: <Donate />,
    projects: <Projects />,
    reports: <Reports />,
    dashboard: <Dashboard />,
    leaderboard: <Leaderboard />,
    admin: <Admin />,
    about: <About />,
    faq: <FAQ />,
    terms: <Terms />,
  };

  return (
    <>
      <Navigation currentPage={page} setPage={setPage} />
      {PAGES[page]}
    </>
  );
}

export default App;