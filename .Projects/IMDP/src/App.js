import React from "react";
import NavBar from "./component/NavBar";
import Banner from "./component/Banner";
import Movies from "./component/Movies";
import WatchList from "./component/WatchList";
import About from "./component/About"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Movies />
            </>
          } />
          <Route path="/watchlist" element={
            <>
              <WatchList />
            </>
          } />

          <Route path="/About" element={
            <>
              <About />
            </>
          } />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
