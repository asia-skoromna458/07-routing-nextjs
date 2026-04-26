"use client";

import { useRouter } from "next/navigation";
import NotePreview from "./NotePreview.client";

type PageProps = {
  params: {
    id: string;
  };
};

export default function NoteModalPage({ params }: PageProps) {
  const router = useRouter();

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
      onClick={() => router.back()}
    >
      <div
        style={{
          background: "#fff",
          padding: "24px",
          borderRadius: "8px",
          maxWidth: "800px",
          width: "100%",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => router.back()}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "transparent",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        <NotePreview id={params.id} />
      </div>
    </div>
  );
}
