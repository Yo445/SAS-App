import "./index.css";
import Navbar from "./components/shared/Navbar";
import Landing from "./pages/landing/Landing";
import Footer from "./components/shared/Footer";
import ListofSevices from "./pages/landing/ListofSevices";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Contacts from "./pages/landing/Contacts";
import { Outlet } from "react-router-dom";
import NotFound from "./components/shared/NotFound ";

function App() {
  return (
    <>
      <Navbar />
      <NotFound />
      <Footer />
      {/* <Login /> */}
    </>
  );
}

export default App;
