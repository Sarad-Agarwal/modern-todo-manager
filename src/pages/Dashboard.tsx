
import React, { useState, useEffect } from 'react';
import { LogOut, User } from 'lucide-react';
import TaskForm, { Task } from '../components/TaskForm';
import TaskList from '../components/TaskList';
import TaskFilter from '../components/TaskFilter';
import { LocalStorageKeys, getFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';

interface DashboardProps {
  username: string;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ username, onLogout }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = getFromLocalStorage(LocalStorageKeys.TASKS);
    if (savedTasks && Array.isArray(savedTasks)) {
      setTasks(savedTasks);
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    saveToLocalStorage(LocalStorageKeys.TASKS, tasks);
  }, [tasks]);

  const addTask = (taskData: Omit<Task, 'id' | 'createdAt'>) => {
    const newTask: Task = {
      ...taskData,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };
    setTasks(prev => [newTask, ...prev]);
  };

  const updateTask = (updatedTask: Task) => {
    setTasks(prev => prev.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ));
    setEditingTask(null);
  };

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const toggleTaskComplete = (id: number) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
  };

  const cancelEdit = () => {
    setEditingTask(null);
  };

  // Filter and search tasks
  const filteredTasks = tasks.filter(task => {
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'completed' && task.completed) || 
      (filter === 'pending' && !task.completed);
    
    const matchesSearch = 
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const taskCounts = {
    all: tasks.length,
    completed: tasks.filter(task => task.completed).length,
    pending: tasks.filter(task => !task.completed).length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-10 h-10 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Task Tracker</h1>
              <p className="text-sm text-gray-600">Welcome back, {username}!</p>
            </div>
          </div>
          
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <TaskForm
          onAddTask={addTask}
          onUpdateTask={updateTask}
          editingTask={editingTask}
          onCancelEdit={cancelEdit}
        />
        
        <TaskFilter
          filter={filter}
          onFilterChange={setFilter}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          taskCounts={taskCounts}
        />
        
        <TaskList
          tasks={filteredTasks}
          onToggleComplete={toggleTaskComplete}
          onEditTask={handleEditTask}
          onDeleteTask={deleteTask}
        />
      </main>
    </div>
  );
};

export default Dashboard;
