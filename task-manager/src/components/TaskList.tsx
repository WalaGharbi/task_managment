import React from 'react';
import { Task } from '../types/Task';
import TaskItem from './TaskItem';

interface TaskListProps {
    tasks: Task[];
    toggleCompletion: (id: string) => void;
    removeTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleCompletion, removeTask }) => {
    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    toggleCompletion={toggleCompletion}
                    removeTask={removeTask}
                />
            ))}
        </ul>
    );
};

export default TaskList;
