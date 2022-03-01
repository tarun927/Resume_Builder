
import './App.css';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Getstart from './Pages/Getstart';
import Workexp from './Pages/Workexp';
import Education from './Pages/Education';
import Skills from './Pages/Skills';
import Summary from './Pages/Summary';
import Final from './Pages/Final';
import { useEffect } from 'react';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
        <Route path="/" element={<Getstart/>}/>
        <Route path="/work" element={<Workexp/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/summary" element={<Summary/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/final" element={<Final/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
