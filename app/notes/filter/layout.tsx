import NotesSidebar from "./@sidebar/NotesSidebar";
import css from "./layout.module.css";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
export default function NotesFilterLayout({ children }: Props) {
  return (
    <section className={css.container}>
      <aside className={css.sidebar}>
        <NotesSidebar />
      </aside>

      <div className={css.notesWrapper}>{children}</div>
    </section>
  );
}
