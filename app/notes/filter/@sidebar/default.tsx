"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import css from "./SidebarNotes.module.css";

const tags = ["Todo", "Work", "Personal", "Meeting", "Shopping"];

export default function NotesSidebar() {
  const searchParams = useSearchParams();
  const query = searchParams.toString(); // зберігаємо page/search

  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <Link
          href={`/notes/filter/all${query ? `?${query}` : ""}`}
          className={css.menuLink}
        >
          All notes
        </Link>
      </li>

      {tags.map((tag) => (
        <li key={tag} className={css.menuItem}>
          <Link
            href={`/notes/filter/${tag}${query ? `?${query}` : ""}`}
            className={css.menuLink}
          >
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}
