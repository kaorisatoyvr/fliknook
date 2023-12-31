
import './sass/styles.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
// import Movie from './components/Movie';
import About from './components/About';
import Individual from './components/Individual';
import Favourite from './components/Favourite';
import Footer from './components/Footer';
import Error from './components/Error';
import DarkMode from './components/DarkMode';



function AppRouter() {
  return (
    <BrowserRouter basename={'/fliknook'}>
      <div className="App">
        {/* add Header Components */}
        <Header />
        <DarkMode />
        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            {/* <Route path="/movie/:type" element={<Movie />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="movie/:id" element={<Individual />} />
            <Route path="/favourite" element={< Favourite />} />
            <Route path="*" element={< Error />} />
          </Routes>
        </main>

        {/* Add Footer Component */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
