import Taskcard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskList() {
  const { tasks } = useContext(TaskContext);
  if (tasks.length === 0) {
    return <div className="text-white text-4xl font-bold text-center">No hay tareas</div>;
  }
  return (
    <div className="grid grid-cols-4 gap-4">
      {tasks.map((task) => (
        <Taskcard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
