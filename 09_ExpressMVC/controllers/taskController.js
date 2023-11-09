let tasks = [
  {id: 1, title: "Tarea 1", completed: false},
  {id: 2, title: "Tarea 2", completed: true},
];

const getAllTasks = (req, res) => {
  res.render("index", { title: 'Lista de Tareas', tasks });
};

const getAddTaskForm = (req, res) => {
  res.render("add", { title: 'Agregar Tarea' });
};

const addTask = (req, res) => {
  let { title } = req.body;
  console.log(req.body);
  let id = tasks.length + 1;
  tasks.push({ id, title, completed:false });
  res.redirect("/");
};

const getEditTaskForm = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find(task => task.id === id);

  if (!task) {
    res.redirect("/");
  } else {
    res.render("edit", { title: "Editar Tarea", task });
  }
};

const editTask = (req, res) => {};

const completeTask = (req, res) => {};

const uncompleteTask = (req, res) => {};

const deleteTask = (req, res) => {};

export default {
  getAllTasks,
  getAddTaskForm,
  addTask,
  getEditTaskForm,
  editTask,
  completeTask,
  uncompleteTask,
  deleteTask
};