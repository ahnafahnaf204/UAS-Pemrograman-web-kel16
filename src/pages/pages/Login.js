import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/authSlice";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (user ) {
      navigate("/profile");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    if (isSuccess) {
      window.location.reload();
    }
  };

  return (
    <div className="bg-[#242424] pt-[90px]">
      <div className=" bg-gray-100 px-9 pb-[20px] pt-[20px]">
        <form
          class="w-full max-w-lg shadow-md p-4 mx-auto my-24"
          onSubmit={onSubmit}
        >
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full  px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Email
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full  px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Password
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onChange}
              />
            </div>
          </div>
          <button
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mx-auto w-full mt-2"
            type="submit"
          >
            Login
          </button>
          <p clasName="w-full">
            Belum punya akun ? <Link className="text-[#6366f1]" to={"/register"}>Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
