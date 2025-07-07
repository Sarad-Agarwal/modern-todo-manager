
import React from 'react';
import { CheckCircle, Circle, ListTodo } from 'lucide-react';
import TaskItem from './TaskItem';
import { Task } from './TaskForm';

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: number) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleComplete,
  onEditTask,
  onDeleteTask
}) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
          <ListTodo className="w-10 h-10 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">No tasks found</h3>
        <p className="text-gray-500">Create your first task to get started!</p>
      </div>
    );
  }

  const completedTasks = tasks.filter(task => task.completed);
  const pendingTasks = tasks.filter(task => !task.completed);

  return (
    <div className="space-y-6">
      {/* Task Statistics */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 text-center shadow-md">
          <ListTodo className="w-6 h-6 text-blue-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">{tasks.length}</div>
          <div className="text-sm text-gray-600">Total</div>
        </div>
        <div className="bg-white rounded-lg p-4 text-center shadow-md">
          <Circle className="w-6 h-6 text-orange-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">{pendingTasks.length}</div>
          <div className="text-sm text-gray-600">Pending</div>
        </div>
        <div className="bg-white rounded-lg p-4 text-center shadow-md">
          <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">{completedTasks.length}</div>
          <div className="text-sm text-gray-600">Completed</div>
        </div>
      </div>

      {/* Task List */}
      <div className="space-y-4">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
