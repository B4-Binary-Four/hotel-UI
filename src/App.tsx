import React from 'react';
import {Routes,Route} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import LoginPage from "./pages/LoginPage";
import BookingPage from "./pages/BookingPage";
import RoomPage from "./pages/RoomPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
          <Route path={"/"} element={<LandingPage/>}/>
          <Route path={"/login"} element={<LoginPage/>}/>
          <Route path={"/booking_list"} element={<BookingPage/>}/>
          <Route path={"/room"} element={<RoomPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
