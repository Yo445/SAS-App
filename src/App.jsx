import './index.css'
import Navbar from './components/shared/Navbar';
import Landing from './pages/landing/Landing';
import Footer from './components/shared/Footer';
import ListofSevices from './pages/landing/ListofSevices';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Contacts from './pages/landing/Contacts';
import Ser1 from './pages/Services/1-VAT Registration/Ser1';
import Ser2 from './pages/Services/2-Corporate Tax Registration/Ser2';
import Ser3 from './pages/Services/3-Settlement of Tax Penalties/Ser3';
import Ser4 from './pages/Services/4-Tax Number Cancellation/Ser4';
import Ser5 from './pages/Services/5-Company Liquidation/Ser5';
import Ser6 from './pages/Services/6-Submitting Tax Declarations/Ser6';
import Ser7 from './pages/Services/7-Approved Financial Reports for Various Entities/Ser7';
import Ser8 from './pages/Services/8-Home Tax Refund for Citizens/Ser8';
import Request_Service from './pages/Services/Request_Service';
import Upload_Docs1 from './pages/Services/1-VAT Registration/Upload_Docs1';
import OTP from './pages/Payment/OTP';
import Done from './pages/Finish/Done';

function App() {

  return (
    <>
        {/* <Navbar />
        <Landing />
        <ListofSevices />
        <Footer />
        <Login /> */}
        <Navbar/>
        {/* <Ser8 /> */}
        {/* <Request_Service /> */}
        <Upload_Docs1 />
        {/* <OTP/> */}
        {/* <Done /> */}
        <Footer />
    </>
  )
}

export default App
