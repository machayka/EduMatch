import { httpsCallable } from "@firebase/functions";
import { Form } from "antd";
import { useState } from "react";
import { DoneButton } from "../components/DoneButton";
import { firebaseFunctions } from "../firebase";
import { Additional } from "./Additional";
import { Campus } from "./Campus";
import { Financing } from "./Financing";
import { Practics } from "./Practics";
import { Region } from "./Region";
import { UniversityType } from "./UniversityType";

interface FormValues {
  additional: string;
  campus: number;
  financing: string[];
  financingOther: string;
  practics: number;
  region: string[];
  universityType: string[];
}

export const FormSection: React.FC = () => {
  const [form] = Form.useForm();
  const handleSubmit = (values: FormValues) => {
    setLoading(true);
    console.log(values);
    const onContactFormSign = httpsCallable(firebaseFunctions, "onFormSubmit");
    onContactFormSign(values);
  };

  const [showUniversityType, setShowUniversityType] = useState(false);
  const [showPractics, setPractics] = useState(false);
  const [showCampus, setShowCampus] = useState(false);
  const [showFinancing, setShowFinancing] = useState(false);
  const [showAdditional, setShowAdditinal] = useState(false);

  const [loading, setLoading] = useState(false);

  return (
    <Form form={form} onFinish={handleSubmit} name="form">
      <Region setShowUniversityType={setShowUniversityType} />
      <UniversityType show={showUniversityType} setPractics={setPractics} />
      <Practics show={showPractics} setShowCampus={setShowCampus} />
      <Campus show={showCampus} setShowFinancing={setShowFinancing} />
      <Financing show={showFinancing} setShowAdditinal={setShowAdditinal} />
      <Additional show={showAdditional} />

      <DoneButton loading={loading} />
    </Form>
  );
};
