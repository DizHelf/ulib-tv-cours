import { Suspense, useContext } from 'react';
import Counter from './components/Counter';
import { Route, Routes } from 'react-router-dom';
import AboutPageAsync from './pages/AboutPage/AboutPage.async';
import MainPageAsync from './pages/MainPage/MainPage.async';
import { Link } from 'react-router-dom';
import './styles/index.scss'
import { useTheme } from './theme/useTheme';



const App = () => {
  
  const {theme, toggleTheme} = useTheme()

  return(
    <div className={`app ${theme}`}>
      <Link to="/">MainPage</Link>
      <Link to="/about">AboutPage</Link>
      <button onClick={toggleTheme}>setTheme</button>
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