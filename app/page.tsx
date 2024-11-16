"use client";

import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('Hedy Lamarr');

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Hola que tal 👋, soy{' '}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              {name}
            </code>
            .
          </li>
        </ol>

        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-md p-2 text-sm text-black w-full sm:w-auto"
          placeholder="Escribí tu nombre"
        />
      </main>
    </div>
  );
}
