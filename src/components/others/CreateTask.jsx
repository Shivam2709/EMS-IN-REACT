import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const [newTask, setNewTask] = useState({});

  const handelSubmit = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDate,
      taskCategory,
      taskDescription,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    });

    const data = userData;

    data.forEach(function (elem) {
      if (assignTo == elem.username) {
        elem.tasks.push(newTask);
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
      }
    });
    setUserData(data);

    localStorage.setItem("employees", JSON.stringify(data));

    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setTaskCategory("");
    setTaskDescription("");
  };

  return (
    <div className="p-5 bg-[#1C1C1C] mt-5 rounded">
      <form
        onSubmit={(e) => {
          handelSubmit(e);
        }}
        className="flex  flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
          <input
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            type="text"
            placeholder="Make a UI design"
            value={taskTitle}
            onChange={(e) => {
              setTaskTitle(e.target.value);
            }}
          />
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="employee name"
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="design, dev etc..."
              value={taskCategory}
              onChange={(e) => {
                setTaskCategory(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="w-1/2">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            id=""
            cols="30"
            rows="10"
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
          ></textarea>
          <button className="bg-emerald-500 hover:bg-emerald-600 px-5 py-3 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
