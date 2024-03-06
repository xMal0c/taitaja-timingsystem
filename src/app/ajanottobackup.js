"use client";

export default function TimerWindow() {
  const JatkaButton = () => (
    <button className="bg-yellow-400 hover:bg-yellow-600 rounded-xl m-2 w-1/3">
      Jatka
    </button>
  );

  const JatkaDisabledButton = () => (
    <button className="bg-neutral-400 cursor-not-allowed rounded-xl m-2 w-1/3">
      Jatka
    </button>
  );

  const AloitaButton = () => (
    <button className="bg-green-400 hover:bg-emerald-600 rounded-xl m-2 w-1/3">
      Aloita
    </button>
  );

  const ValmisButton = () => (
    <button className="bg-sky-400 cursor-not-allowed rounded-xl m-2 w-1/3">
      Valmis
    </button>
  );

  const TehtyButton = () => (
    <button className="bg-red-400 hover:bg-red-600 rounded-xl m-2 w-1/3">
      Valmis
    </button>
  );

  return (
    <div className="flex flex-col py-1 px-1 text-white items-stretch relative">
      {/* Vasen ja Oikea puoli */}
      <div className="flex justify-between">
        {/* Vasen Puoli */}
        <div className="flex-1">
          <div className="bg-black py-2 m-2 rounded-xl shadow-md shadow-indigo-100/55 flex justify-center items-center">
            <p className="subpixel-antialiased font-medium text-stone-300">
              TEHTÄVÄ
            </p>
          </div>
          <div className="bg-[#4f515a] m-2 rounded-xl py-2 flex justify-center items-center">
            <p className="subpixel-antialiased">Pallo</p>
          </div>
          <div className="bg-[#4f515a] m-2 rounded-xl py-2 flex justify-center items-center">
            <p className="subpixel-antialiased">Lentokone</p>
          </div>
          <div className="bg-[#4f515a] m-2 rounded-xl py-2 flex justify-center items-center">
            <p className="subpixel-antialiased">Valo</p>
          </div>
        </div>
        {/* Oikea Puoli */}
        <div className="flex-1">
          <div className="bg-black py-2 m-2 rounded-xl shadow-md shadow-indigo-100/55 flex justify-center items-center">
            <p className="subpixel-antialiased font-medium text-stone-300">
              TILANNE
            </p>
          </div>
          <div className="px-2 py-2">
            <AloitaButton />
            <JatkaDisabledButton />
          </div>
          <div className="px-2 py-2">
            <AloitaButton />
            <JatkaDisabledButton />
          </div>
          <div className="px-2 py-2">
            <AloitaButton />
            <JatkaDisabledButton />
          </div>
        </div>
      </div>

      {/* Joukkue ID */}
      <div className="mt-4">
        <div className="bg-black py-2 m-2 rounded-xl shadow-md shadow-emerald-100/55 flex justify-center items-center">
          <p className="subpixel-antialiased font-medium text-stone-300">
            Joukkue #1
          </p>
        </div>
      </div>
    </div>
  );
}
