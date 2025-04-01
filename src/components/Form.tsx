import React from "react";

type FormProps = {
  name: string;
  title: string;
  onChange: (field: "name" | "title", value: string) => void;
};

const Form: React.FC<FormProps> = ({ name, title, onChange }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div>
        <label>이름: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => onChange("name", e.target.value)}
        />
      </div>
      <div style={{ marginTop: "0.5rem" }}>
        <label>직무: </label>
        <input
          type="text"
          value={title}
          onChange={(e) => onChange("title", e.target.value)}
        />
      </div>
    </div>
  );
};

export default Form;
