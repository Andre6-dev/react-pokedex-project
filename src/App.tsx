import React, { useEffect } from "react"

import "./scss/index.scss"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Search from "./pages/Search";
import MyList from "./pages/MyList";
import About from "./pages/About";
import Compare from "./pages/Compare";
import Pokemon from "./pages/Pokemon";
import { Background } from "./components/Background";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import { toast, ToastContainer, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { clearToasts } from "./app/slices/AppSlice";

const App = () => {

  const { toasts } = useAppSelector(({ app }) => app)
  const dispatch = useAppDispatch()

  useEffect( () => {
    if (toasts.length) {
      const toastOptions: ToastOptions = {
        position: "bottom-right",
        autoClose: 2000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
      }
      toasts.forEach((message: String) => {
        toast(message, toastOptions)
      })
      dispatch(clearToasts())
    }
  }, [toasts, dispatch] );

  return (
    <div className="main-container">
      <Background/>
      <BrowserRouter>
        <div className="app">
          <Navbar/>
          <Routes>
            <Route element={ <Search/> } path="/search"/>
            <Route element={ <MyList/> } path="/list"/>
            <Route element={ <About/> } path="/about"/>
            <Route element={ <Compare/> } path="/compare"/>
            <Route element={ <Pokemon/> } path="/pokemon/:id"/>
            <Route element={ <Navigate to="/pokemon/1"/> } path="*"/>
          </Routes>
          <Footer/>
          <ToastContainer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
