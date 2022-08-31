import styles from "./Task.module.css";
import { Trash } from "phosphor-react";
import Vector from "../../../public/assets/Vector.png";

interface TasksProps {
  id: number;
  title: string;
  isCompleted: boolean;
}

interface TaskProps {
  tasks: any;
  handleRemoveTask: (taskId: string) => void;
  handleCompletedTask: (taskId: string) => void;
  completedTasks: number;
  handleRemoveAll: (taskId: string) => void;
}

export function Task({
  tasks,
  handleRemoveTask,
  handleCompletedTask,
  completedTasks,
  handleRemoveAll
}: TaskProps) {
  return (
    <div className={styles.taskContainer}>
      <header>
        <div className={styles.taskHeaderContent}>
          <p>Tarefas criadas</p>
          <span>{tasks.length}</span>
        </div>
        <button title="Deletar" className={styles.deleteAll} onClick={()=>handleRemoveAll(tasks)}>
              <Trash size={20} />
              <p>Apagar tasks concluídas</p>
            </button>
        <div className={styles.taskHeaderContent}>
          <p>Concluídas</p>
          <span>
            {completedTasks}/{tasks.length}
          </span>
        </div>
      </header>
      {tasks.length <= 0 && (
        <main>
          <img src="/assets/Clipboard.png" />
          <p>
            Você ainda não tem tarefas cadastradas
            <br />
            <span>Crie tarefas e organize seus itens a fazer</span>
          </p>
        </main>
      )}
      {tasks.map((task: any) => (
        <div key={task.id} className={styles.content}>
          <div className={styles.inputContent}>
            <button
              className={
                task.isCompleted ? styles.buttonChecked : styles.buttonUnchecked
              }
              onClick={() => handleCompletedTask(task.id)}
            >
              <img src={task.isCompleted ? Vector : ""} />
            </button>
            <h1
              className={
                task.isCompleted ? styles.taskCheked : styles.taskUnchecked
              }
            >
              {task.title}
            </h1>
            <button title="Deletar" onClick={() => handleRemoveTask(task.id)}>
              <Trash size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
