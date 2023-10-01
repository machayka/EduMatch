interface Props {
  children: React.ReactNode;
}

export const AppWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className=" min-h-screen" style={{ backgroundColor: "0052A5" }}>
      {children}
    </div>
  );
};
