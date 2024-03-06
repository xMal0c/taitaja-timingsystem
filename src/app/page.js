"use client";

import React, { useState, useEffect } from "react";
import MainWindow from "./mainwindow";
import TimerWindow from "./ajanotto";

export default function Home() {
  const [showMainWindow, setShowMainWindow] = useState(false);
  const [showTimerWindow, setShowTimerWindow] = useState(false);

  const toggleMainWindow = () => {
    setShowMainWindow(!showMainWindow);
  };

  const toggleTimerWindow = () => {
    setShowTimerWindow(!showTimerWindow);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-6xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Ajanottojärjestelmän esittely versio&nbsp;
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/xMal0c"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Jonatan Owizyc
          </a>
        </div>
      </div>

      {showMainWindow && <MainWindow />}
      {showTimerWindow && <TimerWindow />}
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-emerald-200 after:via-green-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-700 before:dark:opacity-10 after:dark:from-emerald-900 after:dark:via-[#6ee7b7] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>

      <div className="mb-32 grid text-center lg:max-w-2xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <a
          onClick={toggleMainWindow}
          className="group cursor-pointer rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-emerald-500 hover:bg-emerald-100 hover:dark:border-emerald-700 hover:dark:bg-emerald-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Päänäyttö{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Avaa päänäyttö, josta näkee tapahtumat reaaliajassa.&nbsp;
          </p>
        </a>

        <a
          onClick={toggleTimerWindow}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-emerald-300 hover:bg-emerald-100 hover:dark:border-emerald-700 hover:dark:bg-emerald-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Ajanotto{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Avaa ajanotto komponentti, pysäyttääksesi ajan.&nbsp;
          </p>
        </a>
      </div>
    </main>
  );
}
