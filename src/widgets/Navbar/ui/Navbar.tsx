import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { RouterPath } from 'shared/config/routeConfig/routeConfig'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface Navbar {
  className?: string,
};

export const Navbar = ( { className }: Navbar ) => {

  return(
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher/>

      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RouterPath.main}>Main</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RouterPath.about}>About</AppLink>
      </div>
      
    </div>
  );
};