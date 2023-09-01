import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {

  const {t, i18n} = useTranslation("about");

  return(
    <>
      {t("2-я страница")}
    </>
  );
};

export default AboutPage;