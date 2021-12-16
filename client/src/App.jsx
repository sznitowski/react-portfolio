import Header from './Components/Header/Header';
//import NavbarComponent from './Components/NavbarComponent/NavbarComponent';
import Profile from './Components/Home/Profile';
import Skills from './Components/Skills/Skills';
import Proyects from './Components/Proyects/Proyects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

import "../node_modules/video-react/dist/video-react.css";
import 'bootstrap/dist/css/bootstrap.css'

import './App.scss'

function App() {
  return (

    <div className='app'>
      <Header />
      <div className='sections'>
        <Profile />
        <Skills />
        <Proyects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;