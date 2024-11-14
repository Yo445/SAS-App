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
import './index.css'
import Ser1 from './pages/Services/1-VAT Registration/Ser1';
import Request_Service from './pages/Services/Request_Service';
import Upload_Docs1 from './pages/Services/1-VAT Registration/Upload_Docs1';
import OTP from './pages/Payment/OTP';
import Done from './pages/Finish/Done';

function App() {
  return (
    <>
      <Navbar />
      <NotFound />
      <Footer />
      {/* <Login /> */}
        {/* <Navbar />
        <Landing />
        <ListofSevices />
        <Footer />
        <Login /> */}
        {/* <Ser1 /> */}
        {/* <Request_Service /> */}
        {/* <Upload_Docs1 /> */}
        {/* <OTP/> */}
        {/* <Done /> */}
        <Footer />
    </>
  );
}

export default App;
