import React, {useContext, useState} from 'react';
import SignInPageImg from '../assets/SignInPageImg.jpeg';
import axios from 'axios';
import {useNavigate} from 'react-router';
import {AuthContext} from '../utils/AuthContext';

const SignInPage = () => {
  const navigate = useNavigate();
  const {setIsLoggedIn, setusername} = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
<<<<<<< HEAD
  const [errors, setErrors] = useState({
    userName: '',
    password: '',
  });
=======
>>>>>>> ee716e3c7b9e3df40a0e9ea5acffb3f6899f8387

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

<<<<<<< HEAD
  // const HandleLogin = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:5043/api/Login', {
  //       username: username,
  //       password: password,
  //     });

  //     const token = response.data.Token;
  //     // Store the token securely (e.g., in localStorage or secure cookie)
  //     console.log('Login successful! Token:', token);

  //     localStorage.setItem('jwtToken', token);
  //     setIsLoggedIn(true);
  //     setusername({username});

  //     usenavigate('/');

  //   } catch (err) {
  //     console.error(
  //       'Login failed:',
  //       err.response?.data?.message || 'An error occurred.'
  //     );
  //   }
  // };
  const validateForm = () => {
    let valid = true;

    if (!username) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        userName: 'Name is required',
      }));
      valid = false;
    }

    if (!password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password is required',
      }));
      valid = false;
    }

    return valid;
  };

  const submitActionHandler = (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        axios
          .post('http://localhost:5043/api/Login', {
            username: username,
            password: password,
          })
          .then((response) => {
            const {Token, Role} = response.data;
            localStorage.setItem('token', Token);
            // alert('token stored');
            // console.log(Token);
            // console.log(Role);
            setIsLoggedIn(true);
            setusername({username});

            if (Role === 'Admin') {
              navigate('/Aboutus');
            } else {
              navigate('/');
            }
          });
      } catch (error) {
        alert('error===' + error);
      }
=======
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5043/api/Login", {
        username: username,
        password: password,
      });
      console.log(username);
      console.log(password);

      const token = response.data.Token;
      // Store the token securely (e.g., in localStorage or secure cookie)
      console.log("Login successful! Token:", token);

      localStorage.setItem("jwtToken", token);

      // Redirect to the desired page or perform other actions upon successful login
    } catch (err) {
      console.error(
        "Login failed:",
        err.response?.data?.message || "An error occurred."
      );
>>>>>>> ee716e3c7b9e3df40a0e9ea5acffb3f6899f8387
    }
  };

  return (
    <>
      <div>
        <section className="flex flex-col md:flex-row h-screen items-center">
          <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
            <img
              src={SignInPageImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
          >
            <div className="w-full h-100">
              <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
                Log in to your account
              </h1>

              <form className="mt-6" action="#" method="POST">
                <div>
                  <label className="block text-gray-700">User Name</label>
                  <input
                    //type="email"
                    name=""
                    id=""
                    placeholder="Enter UserName"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    autofocus
                    autocomplete
                    required
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-gray-700">Password</label>
                  <input
<<<<<<< HEAD
                    type={showPassword ? 'text' : 'password'}
=======
                    type={showPassword ? "text" : "password"}
                    // type="text"
>>>>>>> ee716e3c7b9e3df40a0e9ea5acffb3f6899f8387
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    //minlength="8"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                    required
                  />
                </div>
                <label>
                  <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={handleTogglePassword}
                  />{' '}
                  Show Password
                </label>
                {/*{<div className="text-right mt-2">
                  <a
                    href="/"
                    className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                  >
                    Forgot Password?
                  </a></div>}*/}

                <button
<<<<<<< HEAD
                  type="button"
                  onClick={submitActionHandler}
                  //type="submit"
                  className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
=======
                  onClick={handleLogin}
                  type="submit"
                  className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
>>>>>>> ee716e3c7b9e3df40a0e9ea5acffb3f6899f8387
                >
                  Log In
                </button>
              </form>
              <p className="mt-8">
                Need an account?{' '}
                <a
                  href="/signUp"
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  Create an account
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default SignInPage;
