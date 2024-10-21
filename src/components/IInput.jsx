import React, { useState } from "react";

const IInput = ({ onAddTask }) => {
  const [input, setInput] = useState("");

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const handleOnSubmit = () => {
    if (input.trim() !== "") {
      onAddTask(input);  // Add new task
      setInput("");  // Clear the input field
    }
  };

  return (
    <main className="flex flex-col md:flex-row gap-3 items-center p-4 justify-center">
      <input
        onChange={handleOnChange}
        className="w-[90%] text-[20px] xl:w-[50%] h-14 md:h-16 rounded-3 px-2 border-4 border-blue-500"
        type="text"
        placeholder="Enter The Work"
        value={input}
      />
      <button
        onClick={handleOnSubmit}
        className="bg-blue-900 h-16 w-[30%] xl:w-[7%] rounded-3 gap-2 font-bold text-2xl text-white border-4 border-blue-500 hover:border-white"
        type="submit"
      >
        ADD
      </button>
    </main>
  );
};

export default IInput;
