import { Card } from "antd";
import { useTranslation } from "react-i18next";
import { Section } from "./Section";

interface Props {
  response: string;
}
export const Response: React.FC<Props> = ({ response }) => {
  const { t } = useTranslation();
  const responseParts = response.split(/(?=1\.|2\.|3\.)/);

  // Oddziel wstęp od punktowania
  const [introduction, ...schools] = responseParts;

  return (
    <Section>
      <div className="font-bold pb-4">{t("RESPONSE.HEADER")}:</div>
      <div className="mb-2">
        <p>{introduction}</p>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        {schools.map((part, index) => {
          const [university, description] = part.split(" - ");
          return (
            <Card key={index} title={university} className="w-full md:w-auto">
              <div>{description}</div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};
