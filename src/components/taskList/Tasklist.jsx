import React from "react";
import Accepttask from "./Accepttask";
import Newtask from "./Newtask";
import Failedtask from "./Failedtask";
import Completetask from "./Completetask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[59%] flex gap-5 overflow-x-auto items-center flex-nowrap justify-start w-full py-5  mt-10"
    >
      {data.tasks.map((e, index) => {
        if (e.active) {
          return <Accepttask key={index} data={e} />;
        }
        if (e.newTask) {
          return <Newtask key={index} data={e} />;
        }
        if (e.completed) {
          return <Completetask key={index} data={e} />;
        }
        if (e.failed) {
          return <Failedtask key={index} data={e} />;
        }
      })}
    </div>
  );
};

export default TaskList;
