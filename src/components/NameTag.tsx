import React, { forwardRef } from "react";
import logo from "../assets/neurocle_logo.png";

type NameTagProps = {
  name: string;
  title: string;
  bgColor: string;
  nameFontColor: string;
  titleFontColor: string;
};

// forwardRef를 사용하면 외부에서 캡처용으로 ref를 연결할 수 있어요!
const NameTag = forwardRef<HTMLDivElement, NameTagProps>(
  ({ name, title, bgColor, nameFontColor, titleFontColor }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          position: "relative",
          width: "242px",
          height: "153px",
          padding: "14px",
          backgroundColor: bgColor,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          border: "1px solid #9b9b9b",
        }}
      >
        <img
          src={logo}
          style={{
            width: "70px",
            height: "9px",
            position: "absolute",
            top: "11px",
            right: "12px",
          }}
        />

        <div
          style={{
            fontSize: "56px",
            fontWeight: 600,
            color: nameFontColor,
          }}
        >
          {name || "이름"}
        </div>
        <div
          style={{
            fontSize: "13.5px",
            fontWeight: 500,
            marginTop: "2px",
            color: titleFontColor,
          }}
        >
          {title || "직무"}
        </div>
      </div>
    );
  }
);

export default NameTag;
