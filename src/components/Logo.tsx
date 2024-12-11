import React from 'react';


export default function Logo() {
  return (
    <div className="logo hover:cursor-pointer">
      <a href="/"></a>
    <img
      src="/src/assets/logo.png"
      alt="Logo"
      className="h-14 w-auto object-contain" // Taille ajustée du logo
    />
    <div className="flex space-y-6 list-none">
      <p>
        C-<span className="text-[#93d500]">TONTINE</span>
      </p>
    </div>
  </div>
  );
}