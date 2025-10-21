'use client';

import { useState } from 'react';

export default function Home() {
  const [items, setItems] = useState<string[]>([]);

  const handleCreate = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="p-8 rounded-2xl bg-white shadow-md text-center w-80">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Halo Dunia</h1>
        <p className="text-gray-600 mb-4">
          Ini percobaan sederhana, tapi lumayan manis dilihat.
        </p>

        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition mb-4"
        >
          Create
        </button>

        <ul className="text-left text-gray-700 space-y-1">
          {items.map((item, i) => (
            <li key={i} className="border-b pb-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
