"use client";

import React, { useState, useEffect } from "react";

export default function MainWindow() {
  const [tasks, setTasks] = useState([]);
  const [team, setTeam] = useState([]);
  const [start, setStart] = useState(false);
  const [timer, setTimer] = useState(Array(6).fill(0));

  const handleButtonClick = () => {
    document.getElementById("fileInput").click();
  };

  // Function to handle file selection for tasks
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const lines = e.target.result.split("\n");
        const newTasks = lines.map((line) => {
          const [task, time] = line.split(",");
          return { task, time: time.trim() === "false" ? "Ei" : time.trim() };
        });
        setTasks(newTasks);
      };
      reader.readAsText(file);
    }
  };

  // Function to handle file selection for teams
  const handleTeamFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const teamNames = e.target.result
          .split("\n")
          .filter((name) => name.trim() !== "");
        const newTeams = teamNames.map((name, index) => ({
          id: `team-${index}`,
          name: name.trim(),
        }));
        setTeam(newTeams);
      };
      reader.readAsText(file);
    }
  };

  // Function to trigger team file input
  const handleTeamButtonClick = () => {
    document.getElementById("teamFileInput").click();
  };

  useEffect(() => {
    let intervalId;
    if (start) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer.map((time) => time + 1));
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [start]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const TeamSlot = ({ name, id }) => {
    return (
      <div
        key={id}
        className="bg-[#4f515a] hover:bg-[#414552] rounded-t-2xl max-w-36 max-h-10 rounded-b-md py-2 px-9"
      >
        <p className="subpixel-antialiased cursor-default truncate hover:text-clip text-[#e1e1e2]">
          {name}
        </p>
      </div>
    );
  };

  const TimerSlot = ({ time }) => {
    return <p className="subpixel-antialiased">{formatTime(time)}</p>;
  };

  return (
    <div className="flex py-1 px-1 text-white w-9/12 items-strech relative">
      {/* Info - LEFT DIV */}
      <div className="container bg-[#292c34] w-4/12 rounded-tl-xl rounded-bl-sm text-center mx-auto py-2 px-2">
        <div className="bg-black py-2 m-2 rounded-xl shadow-md shadow-indigo-100/55 flex justify-center items-center">
          <div className="flex-1 flex justify-center">
            <p className="subpixel-antialiased font-medium text-stone-300">
              TEHTÄVÄ
            </p>
          </div>
          <p className="px-2 subpixel-antialiased text-sm text-stone-300/70">
            |
          </p>
          <div className="flex-1 flex justify-center">
            <p className="subpixel-antialiased font-medium text-stone-300">
              AIKARAJA
            </p>
          </div>
        </div>

        {tasks.map(({ task, time }, index) => (
          <div
            key={index}
            className="bg-[#4f515a] m-2 rounded-xl py-2 my-10 flex justify-center items-center"
          >
            <div className="flex-1 flex justify-center">
              <p className="subpixel-antialiased">{task}</p>
            </div>
            <p className="px-2 subpixel-antialiased text-sm text-stone-400">
              |
            </p>
            <div className="flex-1 flex justify-center">
              <p className="subpixel-antialiased">{time}</p>
            </div>
          </div>
        ))}

        <div className="text-center mt-20">
          <input
            type="file"
            id="fileInput"
            accept=".txt"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          <button
            onClick={handleButtonClick}
            className="bg-sky-400 hover:bg-sky-600 py-2 rounded-xl w-9/12 cursor-pointer"
          >
            TUO TEHTÄVÄT
          </button>
        </div>
      </div>

      {/* Time - RIGHT DIV  */}
      <div className="container bg-[#2b2f39] flex-auto rounded-tr-xl rounded-br-sm mx-auto text-center py-2 px-2 relative before:absolute before:left-0 before:top-8 before:bottom-8 before:w-px before:bg-green-500 before:content-['']">
        {/* Team Tabs  */}
        <div className="px-2 py-2 flex justify-around items-center">
          {team.map(({ name, id }) => (
            <TeamSlot key={id} name={name} id={id} />
          ))}
        </div>

        {/* Timer divs */}
        <div
          id="task1"
          className="bg-[#4f515a] p-2 m-2 rounded-xl my-8 flex justify-around items-center"
        >
          <TimerSlot />
        </div>

        <div
          id="task2"
          className="bg-[#4f515a] p-2 m-2 rounded-xl my-10 flex justify-around items-center"
        >
          <TimerSlot />
        </div>

        <div
          id="task3"
          className="bg-[#4f515a] p-2 m-2 rounded-xl my-8 flex justify-around items-center"
        >
          <TimerSlot />
        </div>

        {/* Buttons */}
        <div className="text-center ">
          <div className="flex justify-center gap-2 mt-20 mb-4 w-full">
            <button
              onClick={() => setStart(true)}
              className="bg-green-400 hover:bg-emerald-600 py-2 rounded-xl w-3/12"
            >
              ALOITA
            </button>
            <button className="bg-yellow-400 hover:bg-yellow-600 py-2 rounded-xl w-3/12">
              TALLENNA
            </button>
            <button className="bg-red-400 hover:bg-red-600 py-2 rounded-xl w-2/12">
              TYHJENNÄ
            </button>
            <input
              type="file"
              id="teamFileInput"
              accept=".txt"
              style={{ display: "none" }}
              onChange={handleTeamFileChange}
            />
            <button
              onClick={handleTeamButtonClick}
              className="bg-sky-400 hover:bg-sky-600 py-2 rounded-xl w-2/12 cursor-pointer"
            >
              TUO JOUKKUEET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
