import { I18nextProvider } from "react-i18next";
import "./App.css";
import { AppWrapper } from "./features/AppWrapper/AppWrapper";
import { FormSection } from "./features/Form/FormSection";
import { Introduction } from "./features/Introduction/Introduction";
import { Header } from "./features/components/Header";
import LanguageSwitcher from "./features/components/LanguageSwitcher/LanguageSwitcher";
import i18n from "./i18n/i18n";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <AppWrapper>
        <LanguageSwitcher languages={["pl", "en"]} />
        <Header />
        <Introduction />
        <FormSection />
      </AppWrapper>
    </I18nextProvider>
  );
}

export default App;
