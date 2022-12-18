import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { setUser, reset } from "./features/authSlice";
import { auth } from "./firebaseConfig";
import Layout from "./pages/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Edit from "./pages/Edit";

const App = () => {
  // useEffect(() => {

  // }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/edit" element={<Edit />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
