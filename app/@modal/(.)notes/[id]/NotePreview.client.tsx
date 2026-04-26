"use client";

import css from "./NotePreview.client.module.css";
import { fetchNoteById } from "@/lib/api";
import { useEffect, useState } from "react";
import type { Note } from "@/types/note";

type NotePreviewProps = {
  id: string;
};

export default function NotePreview({ id }: NotePreviewProps) {
  const [note, setNote] = useState<Note | null>(null);

  useEffect(() => {
    fetchNoteById(id).then((data: Note) => setNote(data));
  }, [id]);

  if (!note) return <p>Loading...</p>;

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
        </div>

        <p className={css.tag}>{note.tag}</p>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>{note.createdAt}</p>
      </div>
    </div>
  );
}
