import { Button, Spin } from "antd";
import { useTranslation } from "react-i18next";

interface Props {
  loading: boolean;
}

export const DoneButton: React.FC<Props> = ({ loading }) => {
  const { t } = useTranslation();
  return (
    <div className="w-screen text-center pb-10">
      <Button
        htmlType="submit"
        type="primary"
        className="bg-white text-black text-2xl h-12 w-32"
      >
        {loading ? (
          <Spin size="large" className="w-full text-center" />
        ) : (
          t("BUTTON.DONE")
        )}
      </Button>
    </div>
  );
};
