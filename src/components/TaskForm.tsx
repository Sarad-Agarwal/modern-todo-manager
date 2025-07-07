
import React, { useState, useEffect } from 'react';
import { Plus, X, Edit3 } from 'lucide-react';

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
}

interface TaskFormProps {
  onAddTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  onUpdateTask?: (task: Task) => void;
  editingTask?: Task | null;
  onCancelEdit?: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ 
  onAddTask, 
  onUpdateTask, 
  editingTask, 
  onCancelEdit 
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setPriority(editingTask.priority);
      setIsOpen(true);
    }
  }, [editingTask]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      if (editingTask && onUpdateTask) {
        onUpdateTask({
          ...editingTask,
          title: title.trim(),
          description: description.trim(),
          priority
        });
      } else {
        onAddTask({
          title: title.trim(),
          description: description.trim(),
          priority,
          completed: false
        });
      }
      resetForm();
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setPriority('medium');
    setIsOpen(false);
    if (onCancelEdit) onCancelEdit();
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-300';
      case 'medium': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'low': return 'bg-green-100 text-green-800 border-green-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  if (!isOpen && !editingTask) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-4 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center gap-2 font-medium mb-6"
      >
        <Plus className="w-5 h-5" />
        Add New Task
      </button>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          {editingTask ? <Edit3 className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          {editingTask ? 'Edit Task' : 'Add New Task'}
        </h3>
        <button
          onClick={resetForm}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Task Title *
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
            placeholder="Enter task title"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
            placeholder="Enter task description (optional)"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Priority Level
          </label>
          <div className="flex gap-2">
            {(['low', 'medium', 'high'] as const).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPriority(p)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 capitalize ${
                  priority === p 
                    ? getPriorityColor(p) 
                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2.5 px-4 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 font-medium"
          >
            {editingTask ? 'Update Task' : 'Add Task'}
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
