import { Form, Select } from "antd";
import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { Label } from "../components/Label";
import { Section } from "../components/Section";
import { useRegionOptions } from "./utils/useGetRegionOptions.hook";

interface Props {
  setShowUniversityType: Dispatch<SetStateAction<boolean>>;
}

export const Region: React.FC<Props> = ({ setShowUniversityType }) => {
  const regionOption = useRegionOptions();
  const { t } = useTranslation();

  return (
    <Section>
      <Label>1. {t("FORM.LABEL.REGION")}</Label>
      <Form.Item name="region">
        <Select
          mode="multiple"
          options={regionOption}
          placeholder={t("FORM.PLACEHOLDER.REGION")}
          onChange={() => {
            setShowUniversityType(true);
          }}
        />
      </Form.Item>
    </Section>
  );
};
