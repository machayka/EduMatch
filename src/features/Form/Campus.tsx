import { Form, Slider } from "antd";
import { SliderMarks } from "antd/es/slider";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useTranslation } from "react-i18next";
import { Label } from "../components/Label";
import { Section } from "../components/Section";

interface Props {
  show: boolean;
  setShowFinancing: Dispatch<SetStateAction<boolean>>;
}

export const Campus: React.FC<Props> = ({ show, setShowFinancing }) => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleChange = (value: number) => {
    setSliderValue(value);
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
              setShowFinancing(true);
            }}
          >
            <Label>4. {t("FORM.LABEL.CAMPUS")}</Label>
            <Form.Item name="campus">
              <Slider
                min={1}
                max={5}
                onChange={handleChange}
                value={sliderValue}
                marks={marks}
                defaultValue={1}
              />
            </Form.Item>
          </div>
        </Section>
      ) : null}
    </div>
  );
};
