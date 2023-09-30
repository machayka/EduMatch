import { Card } from "antd";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<Props> = ({ children, className }) => (
  <Card
    className={`m-4 xl:m-32 lg:m-24 md:m-8 bg-white shadow-2xl text-xl ${className}`}
  >
    {children}
  </Card>
);
