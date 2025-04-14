import React from 'react';
import { Task } from '../types/Task';

interface TaskItemProps {
    task: Task;
    toggleCompletion: (id: string) => void;
    removeTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleCompletion, removeTask }) => {
    return (
        <li className={`task-item ${task.completed ? 'completed' : ''}`}>
            <span onClick={() => toggleCompletion(task.id)}>{task.text}</span>
            <button onClick={() => removeTask(task.id)}>Remove</button>
        </li>
    );
};

export default TaskItem;
