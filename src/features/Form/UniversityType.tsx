import { Checkbox, Form } from "antd";
import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { Label } from "../components/Label";
import { Section } from "../components/Section";
import { useUniversityTypeOptions } from "./utils/useGetUniversityTypeOptions.hook";

interface Props {
  show: boolean;
  setPractics: Dispatch<SetStateAction<boolean>>;
}

export const UniversityType: React.FC<Props> = ({ show, setPractics }) => {
  const { t } = useTranslation();
  const universityTypeOptions = useUniversityTypeOptions();

  return (
    <div>
      {show ? (
        <Section>
          <Label>2. {t("FORM.LABEL.UNIVERSITY_TYPE")}</Label>
          <Form.Item name="universityType"
                     rules={[{ required: true, message: "Choose at least 1 option" }]}>
            <Checkbox.Group
              options={universityTypeOptions}
              className="flex flex-col"
              onChange={() => {
                setPractics(true);
              }}
            />
          </Form.Item>
        </Section>
      ) : null}
    </div>
  );
};
