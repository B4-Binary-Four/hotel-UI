import React from 'react';
import {Routes,Route} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import LoginPage from "./pages/LoginPage";
import BookingPage from "./pages/BookingPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
          <Route path={"/"} element={<LandingPage/>}/>
          <Route path={"/login"} element={<LoginPage/>}/>
          <Route path={"/booking_list"} element={<BookingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
