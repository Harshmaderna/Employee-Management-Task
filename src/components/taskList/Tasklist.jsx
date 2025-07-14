import React from "react";
import Accepttask from "./Accepttask";
import Newtask from "./Newtask";
import Failedtask from "./Failedtask";
import Completetask from "./Completetask";

const TaskList = ({data}) => {
  console.log(data)
  return (
    <div
      id="tasklist"
      className="h-[59%] flex gap-5 overflow-x-auto items-center flex-nowrap justify-start w-full py-5  mt-10"
    >
      {/* <Accepttask />
     <Newtask />
      <Failedtask />
      <Completetask /> */}
      {data.tasks.map((e) => {
          if(e.active ){
            return <Accepttask />
          }
          if(e.newTask){
            return <Newtask /> 
          }
      })}
      
    </div>
  );
};

export default TaskList;
