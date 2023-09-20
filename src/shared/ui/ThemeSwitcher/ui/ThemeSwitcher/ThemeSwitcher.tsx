import cls from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { FC } from 'react';
import DarkTheme from 'shared/assets/icons/theme-dark.svg'
import LightTheme from 'shared/assets/icons/theme-light.svg'
import { Button } from 'shared/ui/Button/Button';


interface ThemeSwitcherProps {
  className?: string 
}

export const ThemeSwitcher:FC<ThemeSwitcherProps> = ( props ) => {

    const {children, className} = props;

    const {theme, toggleTheme} = useTheme();

    const setTheme = () => {
        toggleTheme()
    }

    return(
        <Button onClick={setTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
            {theme === Theme.DARK ? <DarkTheme/> : <LightTheme/>}
        </Button>
    );
};