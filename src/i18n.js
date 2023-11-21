import en from './translate/en.json';
import ru from './translate/ru.json';

import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

const storedLanguage = localStorage.getItem('lang');
let parsedLanguage;

try {
  parsedLanguage = JSON.parse(storedLanguage);
} catch (error) {
  console.error('Error parsing stored language:', error);
}

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: parsedLanguage,
    fallbackLng: localStorage.getItem('lang'),
  });

export default i18n;
