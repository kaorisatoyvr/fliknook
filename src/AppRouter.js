
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Individual from './Individual';
import Favourite from './Favourite';
import Footer from './Footer';
import Error from './Error';



function AppRouter() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* add Header Components */}
      <Header />
      <main>
        <Routes>
          <Route path = "/" exact element ={<Home />}  />
          <Route path = "/about"  element ={<About />} />
          <Route path = "/individual" element ={<Individual /> } />
          <Route path = "/favourite" element ={< Favourite /> } />
          <Route path = "*" element ={< Error /> } />
        </Routes>
      </main>

      {/* Add Footer Component */}
      <Footer />
    
    </div>
    </BrowserRouter>
  );
}

export default AppRouter;
