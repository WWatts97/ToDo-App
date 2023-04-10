import React from "react";
import './App.css'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navigation from './Components/Navigation'
import NotFound from './Components/NotFound/NotFound'
import Footer from './Components/Footer'
import Categories from "./Components/Categories/Categories";
import ToDos from "./Components/ToDos/ToDos";
import Login from "./Components/Auth/Login";
import About from "./Components/About/About";
import AuthProvider from "./contexts/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";

export default function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<ToDos/>} />
          <Route path='/categories' element={<ProtectedRoute><Categories/></ProtectedRoute>} />
          <Route path='/login' element={<Login/>} /> 
          <Route path='/todos' element={<ToDos/>} />
          <Route path='/about' element={<About/>} />

          <Route path='*' element={<NotFound/>} />
        </Routes>
      <Footer/>
      </Router>

      </AuthProvider>
    </div>
  )
}
