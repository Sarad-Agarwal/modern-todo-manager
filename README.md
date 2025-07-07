# ✅ Personal Task Tracker

A beautifully designed and fully functional **React + TypeScript** task management application that allows users to efficiently manage their daily tasks. This project demonstrates component-driven development, localStorage persistence, responsive UI, and clean code practices.

---

## 📌 Live Demo

🔗 [Click here to view the live app](http://modern-todo-manager-one.vercel.app/)

---

## 📖 Project Overview

This is a **frontend-only** project built with **React + TypeScript**, aimed at showcasing React fundamentals like functional components, hooks, localStorage, and a well-structured component hierarchy. Tasks can be added, edited, deleted, filtered, and stored persistently.

---

## 🚀 Features

### 🔐 Login
- Simple login form (username only)
- Username stored in localStorage
- Redirect to dashboard after login

### 📋 Task Management
- **Add Task**: Title (required), Description (optional)
- **Edit Task**: Inline or modal-based editing
- **Delete Task**: With confirmation prompt
- **Toggle Completion**: Mark as completed or pending

### 📂 Task Display
- Task title, description, creation date/time
- Completion status with clear visual separation

### 🎛️ Task Filtering
- Tabs or buttons for:
  - All
  - Completed
  - Pending
- Task count displayed per filter

### 💾 Data Persistence
- All data stored in `localStorage`
- Persists on page refresh and tab close

---

## 🌟 Bonus Features (Optional Enhancements)
- 🔍 Search functionality
- ⚠ Task priority levels
- 📅 Due dates
- 🌈 Smooth animations & transitions
- 🌓 Dark mode toggle
- 🏷 Task categories/tags

---

## 🛠 Tech Stack

- **React.js** with **TypeScript**
- **Vite** for fast dev experience
- **Tailwind CSS** for styling
- **shadcn/ui** for modern React UI components
- **localStorage** for client-side persistence

---

## 📁 Project Structure

```

task-tracker/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Login.tsx
│   │   ├── TaskForm.tsx
│   │   ├── TaskItem.tsx
│   │   ├── TaskList.tsx
│   │   └── TaskFilter.tsx
│   ├── utils/
│   │   └── localStorage.ts
│   ├── styles/
│   │   └── App.css
│   ├── App.tsx
│   └── main.tsx
├── README.md
├── tsconfig.json
└── package.json

````

---

## 🧪 Sample Data for Testing

```ts
const sampleTasks = [
  {
    id: 1,
    title: "Complete React assignment",
    description: "Build a task tracker application",
    completed: false,
    createdAt: "2024-01-15T10:00:00Z"
  },
  {
    id: 2,
    title: "Review JavaScript concepts",
    description: "Go through ES6+ features",
    completed: true,
    createdAt: "2024-01-14T15:30:00Z"
  }
];
````

---

## 🧠 How to Run Locally

Make sure **Node.js** and **npm** are installed. Then follow these steps:

```bash
# 1. Clone the repository
git clone https://github.com/Sarad-Agarwal/modern-todo-manager.git

# 2. Navigate into the project folder
cd task-tracker

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Visit `http://localhost:5173` (or as shown in terminal) to view the app.

---

## 🖼 Screenshots

> 
![Uploading Screenshot 2025-07-07 135916.png…]()
![Screenshot 2025-07-07 140338](https://github.com/user-attachments/assets/3ee348ec-6610-4466-9eba-8743c863b2d0)
![Screenshot 2025-07-07 140157](https://github.com/user-attachments/assets/0f7fca43-7b2c-409d-a1cc-6803ee094378)
![Screenshot 2025-07-07 140144](https://github.com/user-attachments/assets/61463154-8ee8-4c6b-81ab-904aeac4b9ba)
![Screenshot 2025-07-07 140132](https://github.com/user-attachments/assets/998e5de1-5422-4406-bf5a-52b266c603a4)
![Screenshot 2025-07-07 135942](https://github.com/user-attachments/assets/10e30585-9799-43a0-8299-11e0a3185cf8)
![Screenshot 2025-07-07 135930](https://github.com/user-attachments/assets/88a366f8-f4b0-4207-93e9-7b90d5901ec5)

---

## 📋 Evaluation Criteria

| Criteria                  | Weight |
| ------------------------- | ------ |
| React + TypeScript Skills | 40%    |
| Code Quality              | 25%    |
| UI/UX Design              | 20%    |
| Functional Features       | 15%    |

---

## 📮 Submission Checklist

* [x] Code pushed to public GitHub repo
* [x] Live app deployed (e.g., Vercel, Netlify)
* [x] README.md with full documentation
* [x] All core features implemented and tested

---

### Made using React, TypeScript, Tailwind CSS and a passion for clean design.
