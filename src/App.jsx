import './index.css'
import Navbar from './components/shared/Navbar';
import Landing from './pages/landing/Landing';
import Footer from './components/shared/Footer';
import ListofSevices from './pages/landing/ListofSevices';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Contacts from './pages/landing/Contacts';

function App() {

  return (
    <>
        <Navbar />
        <Landing />
        <ListofSevices />
        <Contacts />
        <Footer />
    </>
  )
}

export default App
