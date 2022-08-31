import React from 'react';
import {Routes,Route} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
          <Route path={"/"} element={<LandingPage/>}/>
          <Route path={"/login"} element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
