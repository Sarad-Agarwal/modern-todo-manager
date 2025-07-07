
import React from 'react';
import { Check, Edit3, Trash2, Clock } from 'lucide-react';
import { Task } from './TaskForm';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: number) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggleComplete,
  onEditTask,
  onDeleteTask
}) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDeleteTask(task.id);
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-md p-6 border-l-4 transition-all duration-200 hover:shadow-lg ${
      task.completed 
        ? 'border-l-green-400 bg-gray-50' 
        : task.priority === 'high' 
          ? 'border-l-red-400' 
          : task.priority === 'medium' 
            ? 'border-l-orange-400' 
            : 'border-l-green-400'
    }`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <button
              onClick={() => onToggleComplete(task.id)}
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                task.completed
                  ? 'bg-green-500 border-green-500 text-white'
                  : 'border-gray-300 hover:border-green-400'
              }`}
            >
              {task.completed && <Check className="w-4 h-4" />}
            </button>
            
            <h3 className={`font-semibold text-lg ${
              task.completed ? 'line-through text-gray-500' : 'text-gray-800'
            }`}>
              {task.title}
            </h3>
            
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(task.priority)}`}>
              {task.priority}
            </span>
          </div>
          
          {task.description && (
            <p className={`text-gray-600 mb-3 ${task.completed ? 'line-through' : ''}`}>
              {task.description}
            </p>
          )}
          
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            Created {formatDate(task.createdAt)}
          </div>
        </div>
        
        <div className="flex gap-2 ml-4">
          <button
            onClick={() => onEditTask(task)}
            className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            title="Edit task"
          >
            <Edit3 className="w-4 h-4" />
          </button>
          
          <button
            onClick={handleDelete}
            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
            title="Delete task"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
