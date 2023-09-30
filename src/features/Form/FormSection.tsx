import { Button, Form } from "antd";
import { Region } from "./Region";
import { UniversityType } from "./UniversityType";
import { useRegionOptions } from "./utils/useGetRegionOptions.hook";

export const FormSection: React.FC = () => {
  const [form] = Form.useForm();
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const regionOption = useRegionOptions();

  console.log(regionOption);

  return (
    <Form form={form} onFinish={handleSubmit} name="form">
      <Region />
      <UniversityType />

      <div className="w-screen text-center">
        <Button
          htmlType="submit"
          type="primary"
          className="bg-white text-black"
        >
          Wynik
        </Button>
      </div>
    </Form>
  );
};
