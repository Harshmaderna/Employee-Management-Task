import React from "react";

const TaskNumber = () => {
  return (
    <div className="flex justify-between gap-5 screen mt-3">
      <div className="h-40 rounded-xl w-[45%] py-6 px-10 bg-red-400">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="xl font-medium">New Task</h3>
      </div>
      <div className="h-40 rounded-xl w-[45%] py-6 px-10 bg-blue-400">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="xl font-medium">New Task</h3>
      </div>
      <div className="h-40 rounded-xl w-[45%] py-6 px-10 bg-green-400">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="xl font-medium">New Task</h3>
      </div>
      <div className="h-40 rounded-xl w-[45%] py-6 px-10 bg-yellow-400">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="xl font-medium">New Task</h3>
      </div>
    </div>
  );
};

export default TaskNumber;
