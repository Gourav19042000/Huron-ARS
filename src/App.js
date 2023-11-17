import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import Header from "./components/Header";
import SignInPage from "./components/SignInPage";
import Footer from "./components/Footer";
import SuccessMessage from "./components/SignupSuccess";
import AutoMobile from "./components/AutomobileCreation";
import AutomobileBody from "./components/AutomobileBody";
import { Provider } from "react-redux";
import store from "./utils/store";
import CartPage from "./components/CartPage";
import Aboutus from "./components/Aboutus";

function App() {
  return (
    <>
      <Provider store={store}>
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </Provider>
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
        path: "/signUp/signUpSuccess",
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
      {
        path: "/Aboutus",
        element: <Aboutus />,
      },
    ],
  },
]);

export default AppRouter;
