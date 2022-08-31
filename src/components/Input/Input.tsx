import { Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./Input.module.css";
import { Task } from "../Task/Task";

interface TasksProps {
  id: number;
  title: string;
  isCompleted: boolean;
}

export function Input() {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState<TasksProps[]>([]);
  const completedTasks = task.filter((task) => task.isCompleted).length;

  function handleCreateTask() {
    if (!title) return;
    const newTask = {
      id: Math.random(),
      title: title,
      isCompleted: false,
    };
    setTask((oldstate) => [...oldstate, newTask]);
    setTitle("");
  }

  function handleRemoveTask(id: string) {
    const filterTask = task.filter((task) => task.id !== Number(id));
    setTask(filterTask);
  }

  function handleCompletedTask(id: string) {
    const checkTask = task.map((task) =>
      task.id === Number(id)
        ? {
            ...task,
            isCompleted: !task.isCompleted,
          }
        : task
    );
    setTask(checkTask);
  }

  function handleRemoveAll(tasks:any) {
    const allTaskCompleted = tasks.filter((task:any) => task.isCompleted !== true);
    setTask(allTaskCompleted)
  }

  return (
    <>
      <div className={styles.Input}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Adicione uma nova tarefa"
          type="text"
        />
        <button type="button" onClick={handleCreateTask}>
          Criar
          <img src="/assets/Layer.png" />
        </button>
      </div>
      <Task
       handleRemoveAll= {handleRemoveAll}
        tasks={task}
        handleRemoveTask={handleRemoveTask}
        handleCompletedTask={handleCompletedTask}
        completedTasks={completedTasks}
      />
    </>
  );
}
