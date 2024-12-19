import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="p-4 flex space-x-2">
      <button onClick={() => changeLanguage('al')} className="bg-blue-500 text-white px-4 py-2 rounded">Shqip</button>
      <button onClick={() => changeLanguage('mk')} className="bg-green-500 text-white px-4 py-2 rounded">Македонски</button>
      <button onClick={() => changeLanguage('tr')} className="bg-red-500 text-white px-4 py-2 rounded">Türkçe</button>
    </div>
  );
};

export default LanguageSwitcher;
