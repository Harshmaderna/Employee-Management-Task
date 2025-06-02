import React from "react";

const Tasklist = () => {
  return (
    <>
    <div
      id="task-list"
      className="h-[450px] overflow-x-auto w-full py-5 mt-10 flex gap-4 items-center justify-start flex-nowrap">
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-300 rounded-xl ">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">high</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">make a youtube video</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium sequi quae officia! Exercitationem, reprehenderit dignissimos!</p>
      </div>
       <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-300 rounded-xl ">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">high</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">make a youtube video</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium sequi quae officia! Exercitationem, reprehenderit dignissimos!</p>
      </div>
       <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-300 rounded-xl ">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">high</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">make a youtube video</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium sequi quae officia! Exercitationem, reprehenderit dignissimos!</p>
      </div>
       <div className="flex-shrink-0 h-full w-[300px] p-5 bg-yellow-300 rounded-xl ">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">high</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">make a youtube video</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium sequi quae officia! Exercitationem, reprehenderit dignissimos!</p>
      </div>
    </div>
    </>
  );
};

export default Tasklist;
