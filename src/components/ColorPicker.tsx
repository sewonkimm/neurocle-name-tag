import React from "react";

type Props = {
  color: string;
  onChange: (color: string) => void;
};

const ColorPicker: React.FC<Props> = ({ color, onChange }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>배경색 선택:</label>
      <input
        type="color"
        value={color}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default ColorPicker;
