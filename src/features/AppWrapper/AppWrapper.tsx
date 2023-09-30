interface Props {
  children: React.ReactNode;
}

export const AppWrapper: React.FC<Props> = ({ children }) => {
  return <div className="bg-white">{children}</div>;
};
