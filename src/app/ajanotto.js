"use client";

import React, { useState, useEffect } from "react";

export default function TimerWindow() {
  const JatkaButton = () => (
    <button className="bg-yellow-400 hover:bg-yellow-600 rounded-xl p-2 w-6/12">
      Jatka
    </button>
  );

  const JatkaDisabledButton = () => (
    <button className="bg-neutral-400 cursor-not-allowed rounded-xl p-2 w-6/12">
      Jatka
    </button>
  );

  const AloitaButton = () => (
    <button className="bg-green-400 hover:bg-emerald-600 rounded-xl p-2 mr-4 w-6/12">
      Aloita
    </button>
  );

  const ValmisButton = () => (
    <button className="bg-sky-400 cursor-not-allowed rounded-xl p-2 mr-4 w-6/12">
      Valmis
    </button>
  );

  const TehtyButton = () => (
    <button className="bg-red-400 hover:bg-red-600 rounded-xl p-2 mr-4 w-6/12">
      Valmis
    </button>
  );

  return (
    <div className="flex flex-col bg-[#2b2f39] w-4/12 rounded-t-xl rounded-b-sm py-1 px-1 text-white items-stretch relative">
      <div className="bg-black p-2 m-4 rounded-xl shadow-md shadow-indigo-100/55 flex justify-evenly items-center">
        <p className="subpixel-antialiased font-medium text-stone-300">
          TEHTÄVÄ
        </p>
        <p className="subpixel-antialiased font-medium text-stone-300">|</p>
        <p className="subpixel-antialiased font-medium text-stone-300">
          TILANNE
        </p>
      </div>
      <div className="flex m-12 items-start">
        {/* vasen puoli */}
        <div className="flex-1">
          <div className="bg-[#4f515a] mb-10 rounded-xl py-2 flex justify-evenly items-center">
            <p className="subpixel-antialiased">Pallo</p>
            <p className="px-2 subpixel-antialiased text-sm text-stone-400">
              |
            </p>
            <p className="subpixel-antialiased">00:00</p>
          </div>
          <div className="bg-[#4f515a] mb-10 rounded-xl py-2 flex justify-evenly items-center">
            <p className="subpixel-antialiased">Lentokone</p>
            <p className="px-2 subpixel-antialiased text-sm text-stone-400">
              |
            </p>
            <p className="subpixel-antialiased">00:00</p>
          </div>
          <div className="bg-[#4f515a] rounded-xl py-2 flex justify-evenly items-center">
            <p className="subpixel-antialiased">Valo</p>
            <p className="px-2 subpixel-antialiased text-sm text-stone-400">
              |
            </p>
            <p className="subpixel-antialiased">00:00</p>
          </div>
        </div>

        {/* Thin Green Line Divider */}
        <div className="w-0.5 bg-green-500 self-stretch mx-8"></div>

        {/* Oikea Puoli */}
        <div className="flex-1">
          <div className="flex justify-evenly mb-10 items-center">
            <AloitaButton />
            <JatkaDisabledButton />
          </div>
          <div className="flex justify-evenly mb-10 items-center">
            <AloitaButton />
            <JatkaDisabledButton />
          </div>
          <div className="flex justify-evenly items-center">
            <AloitaButton />
            <JatkaDisabledButton />
          </div>
        </div>
      </div>

      {/* Joukkue ID */}
      <div className="mt-8 flex justify-evenly items-center">
        <div className="bg-black py-2 mb-10 w-2/3 rounded-xl shadow-md shadow-emerald-100/55 flex justify-center items-center">
          <p className="subpixel-antialiased font-medium text-stone-300">
            Joukkue #1
          </p>
        </div>
      </div>
    </div>
  );
}
