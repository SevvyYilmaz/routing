import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import './App.css';
import String from './components/String';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path="/home" />
          <Route element={<String/>} path="/:word" />
          <Route element={<String/>} path="/:word/:color/:bgcolor" />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
