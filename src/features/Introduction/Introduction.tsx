import { DownOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Section } from "../components/Section";

export const Introduction: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <div>
        <div>{t("HEADER.DESCRIPTION")}</div>
        <div className="text-center">
          <DownOutlined className="text-4xl" />
        </div>
      </div>
    </Section>
  );
};
