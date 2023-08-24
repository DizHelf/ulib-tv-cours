import { Suspense } from 'react';
import Counter from './components/Counter';
import { Route, Routes } from 'react-router-dom';
import AboutPageAsync from './pages/AboutPage/AboutPage.async';
import MainPageAsync from './pages/MainPage/MainPage.async';
import { Link } from 'react-router-dom';
import './styles/index.scss'

const App = () => {
  return(
    <div className="App">
      <Link to="/">MainPage</Link>
      <Link to="/about">AboutPage</Link>
      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          <Route path='/about' element={<AboutPageAsync/>}/>
          <Route path='/' element={<MainPageAsync/>}/>
        </Routes>
      </Suspense>
      <Counter/>
    </div>
  );
};

export default App;