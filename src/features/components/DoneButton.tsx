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
        {loading ? (
          <div className="opacity-50 mt-4 w-full flex items-center justify-center">
            <div className="text-base">{t("RESPONSE.WAITING_TIME")}</div>
          </div>
        ) : null}
      </Button>
    </div>
  );
};
