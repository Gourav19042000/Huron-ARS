import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import Header from "./components/Header";
import Body from "./components/Body";

import Footer from "./components/Footer";
import SuccessMessage from "./components/SignupSuccess";
import AutoMobile from "./components/AutomobileCreation";
import AutomobileBody from "./components/AutomobileBody";
import { Provider } from "react-redux";
import store from "./utils/store";
import CartPage from "./components/CartPage";
import Aboutus from "./components/Aboutus";
import { AuthProvider } from "./utils/AuthContext";
import SignInPage from "./components/SignInPage";
import CustomerDetails from "./components/CustomerDetails";

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
        element: <Body />,
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
      {
        path: "/CustomerDetails",
        element: <CustomerDetails/>,
      },
    ],
  },
]);

export default AppRouter;
