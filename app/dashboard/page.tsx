"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NoteList from "@/components/NoteList";
import { signOut, useSession } from "@/lib/auth-client";

interface Note {
  id: string;
  title: string;
  is_public: number;
  updated_at: number;
  created_at: number;
}

export default function DashboardPage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const [notes, setNotes] = useState<Note[]>([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCounter((c) => c + 1), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!isPending && !session) router.replace("/login");
  }, [session, isPending, router]);

  useEffect(() => {
    if (session) fetchNotes();
  }, [session]);

  async function fetchNotes() {
    const res = await fetch("/api/notes");
    if (res.ok) setNotes(await res.json());
  }

  async function handleNew() {
    const res = await fetch("/api/notes", { method: "POST" });
    if (res.ok) {
      const note = await res.json();
      router.push(`/notes/${note.id}`);
    }
  }

  async function handleDelete(id: string) {
    await fetch(`/api/notes/${id}`, { method: "DELETE" });
    setNotes((prev) => prev.filter((n) => n.id !== id));
  }

  async function handleSignOut() {
    await signOut();
    router.push("/login");
  }

  if (isPending || !session) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-900">Notes</h1>
          <span className="text-sm font-mono text-gray-400">{counter}s</span>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">{session.user.email}</span>
          <button
            onClick={handleSignOut}
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Sign out
          </button>
        </div>
      </header>
      <main className="flex-1 max-w-2xl w-full mx-auto p-6">
        <NoteList notes={notes} onDelete={handleDelete} onNew={handleNew} />
      </main>
    </div>
  );
}
