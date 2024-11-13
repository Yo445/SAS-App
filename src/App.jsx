import './index.css'
import Navbar from './components/shared/Navbar';
import Landing from './pages/landing/Landing';
import Footer from './components/shared/Footer';
import ListofSevices from './pages/landing/ListofSevices';

function App() {

  return (
    <>
        <Navbar />
        <Landing />
        <ListofSevices />
        <Footer />
    </>
  )
}

export default App
