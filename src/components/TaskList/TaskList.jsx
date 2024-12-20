import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  const activeTasks = data.tasks.filter((task) => task.active);
  const newTasks = data.tasks.filter((task) => task.newTask);
  const completedTasks = data.tasks.filter((task) => task.completed);
  const failedTasks = data.tasks.filter((task) => task.failed);

  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10"
    >
      {/* Render active tasks */}
      {activeTasks.map((task, idx) => (
        <AcceptTask key={idx} data={task} />
      ))}

      {/* Render new tasks */}
      {newTasks.map((task, idx) => (
        <NewTask key={idx} data={task} />
      ))}

      {/* Render completed tasks */}
      {completedTasks.map((task, idx) => (
        <CompleteTask key={idx} data={task} />
      ))}

      {/* Render failed tasks */}
      {failedTasks.map((task, idx) => (
        <FailedTask key={idx} data={task} />
      ))}
    </div>
  );
};

export default TaskList;
