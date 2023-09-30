import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Flag from "react-world-flags";

import {
  getCurrentLanguage,
  switchLanguageTo,
} from "../../../i18n/i18.service";
import { Language } from "../../models/i18n.model";
import "./LanguageSwitcher.css";

interface FlagButtonProps {
  code: string;
  onClick: () => void;
}

const languageToFlagMapping: Record<Language, string> = {
  [Language.EN]: "US",
  [Language.PL]: "PL",
};

const FlagButton: React.FC<FlagButtonProps> = ({ code, onClick }) => (
  <Flag
    code={code}
    onClick={onClick}
    className="h-8 w-8 cursor-pointer hover:opacity-75 transition-opacity duration-300"
  />
);

interface Props {
  languages?: string[];
}

const LanguageSwitcher: React.FC<Props> = ({ languages }) => {
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentLanguage = getCurrentLanguage();
  // const location = useLocation();

  const getFlagCode = (language: Language): string => {
    return languageToFlagMapping[language] || "PL";
  };

  const handleLanguageChange = (language: Language) => {
    switchLanguageTo(language);
    setExpanded(false);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const otherLanguages = languages
    ? languages.filter((lang) => lang !== currentLanguage)
    : [Language.PL];

  return (
    <div
      className="absolute top-4 right-4 flex items-center z-20"
      ref={containerRef}
    >
      {/* {location.pathname.includes("/home") && (
        <div className="absolute top-0 -right-2 bg-slate-100 w-12 h-8 z-0 rounded-3xl"></div>
      )} */}
      <div
        className="cursor-pointer z-10"
        onClick={() => setExpanded(!expanded)}
      >
        <FlagButton code={getFlagCode(currentLanguage)} onClick={() => {}} />
        <CSSTransition
          in={expanded}
          timeout={100}
          classNames="fade"
          unmountOnExit
        >
          <div className="absolute flex items-center flex-col">
            {otherLanguages.map((lang) => (
              <FlagButton
                key={lang}
                code={getFlagCode(lang as Language)}
                onClick={() => handleLanguageChange(lang as Language)}
              />
            ))}
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
