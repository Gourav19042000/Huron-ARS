import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import Header from "./components/Header";
<<<<<<< HEAD
import Body from "./components/Body";

=======
import SignInPage from "./components/SignInPage";
>>>>>>> ee716e3c7b9e3df40a0e9ea5acffb3f6899f8387
import Footer from "./components/Footer";
import SuccessMessage from "./components/SignupSuccess";
import AutoMobile from "./components/AutomobileCreation";
import AutomobileBody from "./components/AutomobileBody";
import { Provider } from "react-redux";
import store from "./utils/store";
import CartPage from "./components/CartPage";
<<<<<<< HEAD
import Aboutus from "./components/Aboutus";
import { AuthProvider } from "./utils/AuthContext";
import SignInPage from "./components/SignInPage";
import CustomerDetails from "./components/CustomerDetails";
=======
>>>>>>> ee716e3c7b9e3df40a0e9ea5acffb3f6899f8387

function App() {
  return (
    <>
    <AuthProvider>
      <Provider store={store}>
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </Provider>
      </AuthProvider>
    </>
  );
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AutomobileBody />,
      },
      {
        path: "/signIn",
        element: <SignInPage />,
      },
      {
        path: "/signUp",
        element: <SignUpPage />,
      },
      {
        path: "/signUp/signUpSuccess/",
        element: <SuccessMessage />,
      },
      {
        path: "/admin",
        element: <AutoMobile />,
      },
      {
        path: "/home",
        element: <AutomobileBody />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
<<<<<<< HEAD
      {
        path: "/Aboutus",
        element: <Aboutus />,
      },
      {
        path: "/CustomerDetails",
        element: <CustomerDetails/>,
      },
=======
>>>>>>> ee716e3c7b9e3df40a0e9ea5acffb3f6899f8387
    ],
  },
]);

export default AppRouter;
