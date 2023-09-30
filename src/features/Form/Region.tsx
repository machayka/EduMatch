import { Form, Select } from "antd";
import { useTranslation } from "react-i18next";
import { Label } from "../components/Label";
import { Section } from "../components/Section";
import { useRegionOptions } from "./utils/useGetRegionOptions.hook";

export const Region: React.FC = () => {
  const regionOption = useRegionOptions();
  const { t } = useTranslation();

  return (
    <Section>
      <Label>1. {t("FORM.LABEL.REGION")}</Label>
      <Form.Item name="region">
        <Select
          options={regionOption}
          placeholder={t("FORM.PLACEHOLDER.REGION")}
        />
      </Form.Item>
    </Section>
  );
};
