import React from 'react'

const CreateTask = () => {
  return (
    <div>
      <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
        <form className="flex flex-wrap w-full items-start justify-between">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none placeholder:text-gray-300 text-white border border-gray-500"
                type="text"
                placeholder="title"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none placeholder:text-gray-300 text-white border border-gray-500"
                type="date"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Asign to </h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none placeholder:text-gray-300 text-white border border-gray-500"
                type="text"
                placeholder="employee name"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none placeholder:text-gray-300 text-white border border-gray-500"
                type="text"
                placeholder="design, dev, etc"
              />
            </div>
          </div>
          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none placeholder:text-gray-300 text-white border border-gray-500"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button className="bg-emerald-400 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 cursor-pointer w-full">
            Create Task
          </button>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default CreateTask
