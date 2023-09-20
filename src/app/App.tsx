import 'app/styles/index.scss'
import 'shared/config/i18n/i18n'
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react';


const App = () => {

    const { theme } = useTheme();

    console.log('123123');

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div>Loading... </div>}>
                <Navbar/>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div >
    );
};

export default App;