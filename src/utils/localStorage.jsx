const employees = [
  {
    id: 1,
    username: "Arjun sharma",
    email: "e1@e.com",
    password: "123",
    taskCounts: {
      active: 4,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update website",
        taskDescription: "Update website with new design",
        taskDate: "2023-01-01",
        category: "Design",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create wireframe",
        taskDescription: "Create a wireframe for the new homepage",
        taskDate: "2023-01-02",
        category: "Design",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix bugs",
        taskDescription: "Fix frontend bugs in the login module",
        taskDate: "2023-01-03",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Optimize SEO",
        taskDescription: "Improve website SEO performance",
        taskDate: "2023-01-04",
        category: "Marketing",
      },
    ],
  },
  {
    id: 2,
    username: "Rahul verma",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client meeting",
        taskDescription: "Discuss project requirements",
        taskDate: "2024-01-01",
        category: "Design",
      },
    ],
  },
  {
    id: 3,
    username: "Sneha menon",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 4,
      newTask: 1,
      completed: 1,
      failed: 2,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update website",
        taskDescription: "Update website with new design",
        taskDate: "2023-01-01",
        category: "Design",
      },
    ],
  },
  {
    id: 4,
    username: "Deepak nair",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 5,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update website",
        taskDescription: "Update website with new design",
        taskDate: "2023-01-01",
        category: "Design",
      },
    ],
  },
  {
    id: 5,
    username: "Priya kapoor",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update website",
        taskDescription: "Update website with new design",
        taskDate: "2023-01-01",
        category: "Design",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || null;
  const admin = JSON.parse(localStorage.getItem("admin")) || null;

  return { employees, admin };
};
