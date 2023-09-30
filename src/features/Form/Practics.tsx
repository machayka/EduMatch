import { Form, Slider } from "antd";
import { SliderMarks } from "antd/es/slider";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useTranslation } from "react-i18next";
import { Label } from "../components/Label";
import { Section } from "../components/Section";

interface Props {
  show: boolean;
  setShowCampus: Dispatch<SetStateAction<boolean>>;
}

export const Practics: React.FC<Props> = ({ show, setShowCampus }) => {
  const [sliderValue, setSliderValue] = useState(1);

  const handleChange = (value: number) => {
    setSliderValue(value);
    setShowCampus(true);
  };
  const { t } = useTranslation();

  const marks: SliderMarks = {
    1: <div className="ml-6">{t("FORM.IMPORTANCE.UNIMPORTANT")}</div>,
    3: <div>{t("FORM.IMPORTANCE.NEUTRAL")}</div>,
    5: <div className="mr-3">{t("FORM.IMPORTANCE.IMPORTANT")}</div>,
  };

  return (
    <div>
      {show ? (
        <Section>
          <div
            onClick={() => {
              setShowCampus(true);
            }}
          >
            <Label>3. {t("FORM.LABEL.PRACTICS")}</Label>
            <Form.Item name="practics">
              <Slider
                min={1}
                max={5}
                onChange={handleChange}
                value={sliderValue}
                marks={marks}
              />
            </Form.Item>
          </div>
        </Section>
      ) : null}
    </div>
  );
};
