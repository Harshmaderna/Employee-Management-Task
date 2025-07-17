import React, { useState } from "react";

const CreateTask = () => {
  const [form, setForm] = useState({
    taskTitle: "",
    date: "",
    assignto: "",
    category: "",
    description: "",
  });
  const [task, setTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();
    setTask([
  
  {
    taskTitle: form.taskTitle,
    description: form.description,
    date: form.date,
    category: form.category,
    assignto: form.assignto,
    active: false,
    newTask: true,
    failed: true,
    completed: false
  }
]);
    console.log(task)
    setForm({
      taskTitle: "",
      date: "",
      assignto: "",
      category: "",
      description: "",
    });
  };
  return (
    <div>
      <div className="p-5 bg-[#4b4444] mt-7 rounded">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-wrap w-full items-start justify-between"
        >
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                value={form.taskTitle}
                onChange={(e) =>
                  setForm({ ...form, taskTitle: e.target.value })
                }
                className="text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 border-[1px] mb-4"
                type="text"
                placeholder="ui design"
              />
            </div>
            <div>
              <h3 className="text-sm  text-gray-300 mb-0.5">Date</h3>
              <input
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 border-[1px] mb-4"
                type="date"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
              <input
                value={form.assignto}
                onChange={(e) => setForm({ ...form, assignto: e.target.value })}
                className="text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 border-[1px] mb-4"
                type="text"
                placeholder="employee name"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Cateogory</h3>
              <input
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 border-[1px] mb-4"
                type="text"
                placeholder="design, dev, etc"
              />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full cursor-pointer">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
