// import dayjs from 'dayjs';
import { Language } from "../features/models/i18n.model";
import i18n from "./i18n";

let _currentLanguage: Language = i18n.language as Language;
// dayjs.locale(_currentLanguage);

export const getCurrentLanguage = (): Language => {
  return i18n.language as Language;
};

export const switchLanguageTo = (languageKey: Language): void => {
  _currentLanguage = languageKey;
  // dayjs.locale(_currentLanguage);
  i18n.changeLanguage(_currentLanguage);
};
