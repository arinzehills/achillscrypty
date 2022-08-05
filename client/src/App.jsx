import { useState } from "react";
import Home from "./Pages/Home";
import Trade from "./Pages/Trade/Trade";
import "./App.css";
import { Routes as Switch, Route, useLocation } from "react-router-dom";
import HomepageWrapper from "./Pages/HomepageWrapper/HomepageWrapper";
import About from "./Pages/About/About";
import { Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route path='/' exact element={<Home/>}> */}
        <Route path="/" exact element={<HomepageWrapper />}>
          <Route index element={<Home />} />
          <Route path="/trade" exact element={<Trade />} />
          <Route path="/about" exact element={<About />} />
          {/* <Route path='/login' 
              
              exact element={<Login />}/> */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
