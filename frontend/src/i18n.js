import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import es from './locales/es.json';
import en from './locales/en.json';
import qu from './locales/qu.json';
import ay from './locales/ay.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      es: {
        translation: es,
      },
      en: {
        translation: en,
      },
      qu: {
        translation: qu,
      },
      ay: {
        translation: ay,
      },
    },
  });

export default i18n;