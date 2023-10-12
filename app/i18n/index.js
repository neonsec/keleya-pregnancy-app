import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import de from './de.json';

const resources = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
};

const languageDetector = {
    type: 'languageDetector',
    async: true,
    detect: cb => cb('en'),
    init: () => {},
    cacheUserLanguage: () => {},
  };

i18n.use(languageDetector).use(initReactI18next).init({
  resources,
  lng: 'zh',
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false
  }
});