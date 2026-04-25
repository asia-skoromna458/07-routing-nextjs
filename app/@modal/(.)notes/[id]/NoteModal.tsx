"use client";

type Props = {
  children: React.ReactNode;
};

export default function NoteModal({ children }: Props) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">{children}</div>
    </div>
  );
}
