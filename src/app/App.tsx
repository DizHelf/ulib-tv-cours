import { Suspense, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Link } from 'react-router-dom';
import 'app/styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';



const App = () => {
  
  const {theme, toggleTheme} = useTheme();

  return(
    <div className={classNames("app", {}, [theme])}>
      <Link to="/">MainPage</Link>
      <Link to="/about">AboutPage</Link>
      <button onClick={toggleTheme}>setTheme</button>
      <AppRouter/>
    </div>
  );
};

export default App;