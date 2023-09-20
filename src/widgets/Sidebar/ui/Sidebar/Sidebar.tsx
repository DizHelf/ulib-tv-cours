import cls from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ( { className } ) => {

    const [collapsed, setCollapsed] = useState(false)

    const toggleSidebar = () => {
        setCollapsed((prev) => !prev)
    }

    return(
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={toggleSidebar}>toggle</button>

            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};