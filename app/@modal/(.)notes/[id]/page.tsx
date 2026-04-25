"use client";

import NoteModal from "./NoteModal";
import NotePreview from "./NotePreview";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <NoteModal>
      <NotePreview id={params.id} />
    </NoteModal>
  );
}
