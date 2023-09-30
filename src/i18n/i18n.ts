import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// import translationEN from './locales/en/translation.json';

import { Language } from "../features/models/i18n.model";
import translationEN from "./locales/en/translation.json";
import translationPL from "./locales/pl/translation.json";

const LOCAL_STORAGE_I18N_LANGUAGE_KEY = "i18nextLng";

const resources = {
  [Language.EN]: {
    translation: translationEN,
  },
  [Language.PL]: {
    translation: translationPL,
  },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    react: {
      useSuspense: false,
    },
    resources,
    lng: localStorage.getItem(LOCAL_STORAGE_I18N_LANGUAGE_KEY) ?? Language.PL,
    fallbackLng: Language.PL,
    detection: {
      order: ["localStorage", "navigator"],
      lookupQuerystring: "lng",
      lookupLocalStorage: LOCAL_STORAGE_I18N_LANGUAGE_KEY,
      caches: ["localStorage"],
    },
  });

export default i18n;
