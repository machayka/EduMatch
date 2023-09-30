import { FC, ReactNode } from "react";

export const Label: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="text-lg p-2">{children}</div>;
};
