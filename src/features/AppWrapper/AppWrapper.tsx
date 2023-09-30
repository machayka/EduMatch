interface Props {
  children: React.ReactNode;
}

export const AppWrapper: React.FC<Props> = ({ children }) => {
  return <div className="bg-blue-700 min-h-screen">{children}</div>;
};
