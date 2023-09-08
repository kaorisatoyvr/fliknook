
import './sass/styles.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Individual from './components/Individual';
import Favourite from './components/Favourite';
import Footer from './components/Footer';
import Error from './components/Error';



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
          <Route path = "movie/:id" element ={<Individual /> } />
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
