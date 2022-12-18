import React,{useEffect} from "react";
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { setUser,reset } from "../../features/authSlice";
import { auth } from "../../firebaseConfig";

const Layout = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  );
  const dispatch = useDispatch();
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ uid: [user.uid] }));
      } else {
        dispatch(reset());
      }
    });
  }, [dispatch])
  
 
  
  return (
    <div>
      <Navbar />
      <div>
      <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
