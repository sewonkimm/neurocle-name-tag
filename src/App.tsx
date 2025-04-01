import { useState, useRef } from "react";
import Form from "./components/Form";
import NameTag from "./components/NameTag";
import DownloadButton from "./components/DownloadButton";
import TextStyleControls from "./components/TextStyleControls";
import ColorPicker from "./components/ColorPicker";

function App() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [nameFontColor, setNameFontColor] = useState("#252E36");
  const [titleFontColor, setTitleFontColor] = useState("#485664");

  const [bgColor, setBgColor] = useState("#FFFFFF");

  const tagRef = useRef<HTMLDivElement>(null);

  const handleChange = (field: "name" | "title", value: string) => {
    if (field === "name") setName(value);
    if (field === "title") setTitle(value);
  };

  return (
    <div
      style={{
        fontFamily: "Pretendard",
        padding: "2rem",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        gap: "5rem",
      }}
    >
      <div>
        <h1>이름표 생성기</h1>
        <Form name={name} title={title} onChange={handleChange} />

        <TextStyleControls
          nameFontColor={nameFontColor}
          setNameFontColor={setNameFontColor}
          titleFontColor={titleFontColor}
          setTitleFontColor={setTitleFontColor}
        />

        <ColorPicker color={bgColor} onChange={setBgColor} />
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h2>Preview</h2>

        <NameTag
          name={name}
          title={title}
          ref={tagRef}
          bgColor={bgColor}
          nameFontColor={nameFontColor}
          titleFontColor={titleFontColor}
        />
        <DownloadButton targetRef={tagRef} />
      </div>
    </div>
  );
}

export default App;
