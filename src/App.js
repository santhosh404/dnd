import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Link, Routes, Route } from "react-router-dom"
import Greeting from './component/greeting';
import Home from './component/home'
import User from "./component/user"

function App() {

  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={"/greeting"} element={<Greeting name={"Hrn"} />} />
      <Route path={"/user"} element={<User username={"ds"}/>} />
    </Routes>
  );
}

export default App;
