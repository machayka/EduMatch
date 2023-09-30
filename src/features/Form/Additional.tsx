import { Form, Input } from "antd";
import { useTranslation } from "react-i18next";
import { Label } from "../components/Label";
import { Section } from "../components/Section";

interface Props {
  show: boolean;
}

export const Additional: React.FC<Props> = ({ show }) => {
  const { t } = useTranslation();

  return (
    <div>
      {show ? (
        <Section>
          <Label>6. {t("FORM.LABEL.ADDITIONAL")}</Label>
          <Form.Item name="additional">
            <Input />
          </Form.Item>
        </Section>
      ) : null}
    </div>
  );
};
