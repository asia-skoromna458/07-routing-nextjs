"use client";

import { useRouter, useParams } from "next/navigation";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import { useState } from "react";
import Modal from "@/components/PreviewModal/Modal";
import NotePreview from "./NotePreview.client";

export default function NoteModalPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [queryClient] = useState(() => new QueryClient());

  queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Modal onClose={() => router.back()}>
        <NotePreview id={id} />
      </Modal>
    </HydrationBoundary>
  );
}
