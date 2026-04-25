import { fetchNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";

interface FilterProps {
  params: { tag: string[] };
}

export default async function FilteredNotesPage({ params }: FilterProps) {
  const tag = params.tag?.[0];

  const response =
    tag === "all" ? await fetchNotes() : await fetchNotes(1, 12, "", tag);

  return <NoteList notes={response.notes} />;
}
