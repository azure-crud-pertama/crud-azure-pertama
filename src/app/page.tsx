'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

type Item = { id: string; text: string };

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [input, setInput] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleCreate = (e: FormEvent) => {
    e.preventDefault();
    const value = input.trim();
    if (!value) return;
    const newItem: Item = { id: crypto.randomUUID(), text: value };
    setItems(prev => [...prev, newItem]);
    setInput('');
  };

  const handleDelete = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="p-8 rounded-2xl bg-white shadow-md text-center w-96">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Halo Dunia</h1>
        <p className="text-gray-600 mb-4">
          Ini percobaan sederhana, tapi lumayan manis dilihat.
        </p>

        <form onSubmit={handleCreate} className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Tulis sesuatu..."
            className="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Teks untuk dibuat"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Create
          </button>
        </form>

        <ul className="text-left text-gray-700 space-y-1">
          {items.map(item => (
            <li key={item.id} className="flex items-center justify-between border-b pb-1">
              <span className="truncate">{item.text}</span>
              <button
                onClick={() => handleDelete(item.id)}
                className="ml-2 px-2 py-1 text-sm rounded-md bg-red-600 text-white hover:bg-red-700 transition"
                aria-label={`Hapus ${item.text}`}
                title="Delete"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
