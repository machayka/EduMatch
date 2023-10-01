import { Section } from "./Section";

interface Props {
  response: string;
}

export const Response: React.FC<Props> = ({ response }) => {
  return (
    <Section>
      <div className="font-bold pb-4">Response:</div>
      <div>{response}</div>
    </Section>
  );
};
