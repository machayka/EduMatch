import { Checkbox, Form, Input } from "antd";
import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { Label } from "../components/Label";
import { Section } from "../components/Section";
import { useGetFinancingOptions } from "./utils/useGetFinancingOptions.hook";

interface Props {
  show: boolean;
  setShowAdditinal: Dispatch<SetStateAction<boolean>>;
}

export const Financing: React.FC<Props> = ({ show, setShowAdditinal }) => {
  const { t } = useTranslation();
  const financingOptions = useGetFinancingOptions();

  return (
    <div>
      {show ? (
        <Section>
          <Label>5. {t("FORM.LABEL.FINANCING")}</Label>
          <Form.Item name="financing"
                     rules={[{ required: true, message: "Choose at least 1 option" }]}>
            <Checkbox.Group
              options={financingOptions}
              className="flex flex-col"
              onChange={() => {
                setShowAdditinal(true);
              }}
            />
          </Form.Item>
          <div className="py-2 text-base -mt-6">
            {t("FORM.OPTIONS.FINANCING.OTHER")}
          </div>
          <Form.Item name="financingOther">
            <Input />
          </Form.Item>
        </Section>
      ) : null}
    </div>
  );
};
