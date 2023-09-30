import { Checkbox, Form } from "antd";
import { useTranslation } from "react-i18next";
import { Label } from "../components/Label";
import { Section } from "../components/Section";
import { useUniversityTypeOptions } from "./utils/useGetUniversityTypeOptions.hook";

export const UniversityType: React.FC = () => {
  const { t } = useTranslation();
  const universityTypeOptions = useUniversityTypeOptions();

  return (
    <Section>
      <Label>2. {t("FORM.LABEL.UNIVERSITY_TYPE")}</Label>
      <Form.Item name="universityType">
        <Checkbox.Group
          options={universityTypeOptions}
          className="flex flex-col"
        />
      </Form.Item>
    </Section>
  );
};
