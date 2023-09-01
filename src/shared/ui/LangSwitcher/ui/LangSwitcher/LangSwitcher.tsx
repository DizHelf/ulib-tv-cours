import cls from './LangSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string
};

export const LangSwitcher: FC<LangSwitcherProps> = ( { className } ) => {

  const {t, i18n} = useTranslation("translation");

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
  }

  
  return(
    <Button 
      theme={ButtonTheme.CLEAR} 
      className={classNames(cls.LangSwitcher, {}, [className])}
      onClick={toggle}
    >
      {t("Язык")}
    </Button>
  );
};