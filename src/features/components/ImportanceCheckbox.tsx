import { Checkbox } from "antd";
import React, { useState } from "react";

interface CustomCheckboxProps {
  onChange: (e: any) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: any) => {
    setChecked(e.target.checked);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div
      className="custom-checkbox opacity-80 absolute top-2 right-2"
      onClick={() => setChecked(!checked)}
      style={{
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        backgroundColor: checked ? "green" : "white",
        border: "1px solid gray",
      }}
    >
      <Checkbox
        checked={checked}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export const ImportanceCheckbox: React.FC = () => {
  const onChange = () => {
    console.log("hello");
  };

  return <CustomCheckbox onChange={onChange} />;
};
