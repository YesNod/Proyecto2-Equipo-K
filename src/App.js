import React from "react"
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import FAQ from "./components/FAQ"
import Chat from "./components/Chat"
import Footer from "./components/Footer"
import Login from "./components/Auth/Login"
import AllCourses from "./components/AllCourses"
import ProtectedRoute from "./components/ProtectedRoute"
import CourseDetail from "./components/CourseDetail"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <main className="main-container">
                <Home />
                <About />
                <AllCourses />
                <FAQ />
                <Contact />
              </main>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/curso/:courseId" element={<CourseDetail />} />
        </Routes>
        <Chat />
        <Footer />
      </div>
    </Router>
  )
}

export default App
