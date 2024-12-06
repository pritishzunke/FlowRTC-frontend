import React, { useState } from "react";

const GenerateRoom = () => {
  const [roomId, setRoomId] = useState(""); // State to store the generated Room ID

  // Function to generate a random Room ID
  const generateRoomId = () => {
    const newRoomId = Math.random().toString(36).substring(2, 10); // Generate random string
    setRoomId(newRoomId);
  };

  // Function to copy Room ID to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(roomId);
    alert("Room ID copied to clipboard!");
  };

  return (
    <div className="mx-10 my-5 flex flex-col items-center justify-center rounded-3xl bg-neutral-800 py-6">
      {/* Title */}
      <div className="mb-4 font-doto text-2xl text-white">
        Generate Room ID:
      </div>

      {/* Input and Buttons */}
      <div className="flex w-full max-w-2xl flex-wrap items-center gap-4">
        {/* Read-only Input */}
        <input
          type="text"
          value={roomId}
          readOnly
          className="flex-grow rounded-xl border-2 border-gray-500 bg-neutral-700 p-2 text-center text-white focus:outline-none"
          placeholder="Room ID will appear here"
        />

        {/* Generate Button */}
        <button
          onClick={generateRoomId}
          className="rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
        >
          Generate
        </button>

        {/* Copy Button */}
        <button
          onClick={copyToClipboard}
          disabled={!roomId} // Disable button if no Room ID
          className={`rounded-xl px-4 py-2 ${
            roomId
              ? "bg-green-600 text-white hover:bg-green-500"
              : "bg-gray-400 text-gray-700"
          }`}
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default GenerateRoom;
