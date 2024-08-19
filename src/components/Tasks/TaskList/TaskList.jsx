import { Task } from "../Task/Task";
import "./TaskList.css";

export const TaskList = (props) => {
    return (
        <ul>
            {props.items.map((task) => (
                <Task
                    key={task.id}
                    id={task.id}
                    onDelete={props.onDeleteTask}>
                    {task.text}
                </Task>
            ))}
        </ul>
    );
};
