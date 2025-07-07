
import React from 'react';
import { ListTodo, Circle, CheckCircle, Search } from 'lucide-react';

interface TaskFilterProps {
  filter: 'all' | 'completed' | 'pending';
  onFilterChange: (filter: 'all' | 'completed' | 'pending') => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  taskCounts: {
    all: number;
    completed: number;
    pending: number;
  };
}

const TaskFilter: React.FC<TaskFilterProps> = ({
  filter,
  onFilterChange,
  searchTerm,
  onSearchChange,
  taskCounts
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => onFilterChange('all')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            filter === 'all'
              ? 'bg-blue-500 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <ListTodo className="w-4 h-4" />
          All ({taskCounts.all})
        </button>
        
        <button
          onClick={() => onFilterChange('pending')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            filter === 'pending'
              ? 'bg-orange-500 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Circle className="w-4 h-4" />
          Pending ({taskCounts.pending})
        </button>
        
        <button
          onClick={() => onFilterChange('completed')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            filter === 'completed'
              ? 'bg-green-500 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <CheckCircle className="w-4 h-4" />
          Completed ({taskCounts.completed})
        </button>
      </div>
    </div>
  );
};

export default TaskFilter;
