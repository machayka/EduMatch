import { useTranslation } from "react-i18next";

export const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>EduMatch </div>
      <div>{t("HEADER.DESCRIPTION")}</div>
    </div>
  );
};
