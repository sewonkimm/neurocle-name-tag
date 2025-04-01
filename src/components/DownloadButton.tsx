import React from "react";
import html2canvas from "html2canvas";

type DownloadButtonProps = {
  targetRef: React.RefObject<HTMLDivElement>;
};

const DownloadButton: React.FC<DownloadButtonProps> = ({ targetRef }) => {
  const handleDownload = async () => {
    if (!targetRef.current) return;

    const canvas = await html2canvas(targetRef.current, {
      scale: 2, // ← 여기서 2배 해상도로 캡처
    });

    const dataURL = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "nametag.png";
    link.click();
  };

  return (
    <button onClick={handleDownload} style={{ marginTop: "1rem" }}>
      이름표 이미지로 저장
    </button>
  );
};

export default DownloadButton;
