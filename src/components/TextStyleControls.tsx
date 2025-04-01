import React from "react";

type Props = {
  nameFontColor: string;
  setNameFontColor: (value: string) => void;
  titleFontColor: string;
  setTitleFontColor: (value: string) => void;
};

const TextStyleControls: React.FC<Props> = ({
  nameFontColor,
  setNameFontColor,
  titleFontColor,
  setTitleFontColor,
}) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div>
        <label>이름 폰트 색상: </label>
        <input
          type="color"
          value={nameFontColor}
          onChange={(e) => setNameFontColor(e.target.value)}
        />
      </div>

      <div style={{ marginTop: "0.5rem" }}>
        <label>직무 폰트 색상: </label>
        <input
          type="color"
          value={titleFontColor}
          onChange={(e) => setTitleFontColor(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TextStyleControls;
