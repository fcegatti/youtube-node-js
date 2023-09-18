import { readFileSync, writeFileSync } from 'fs';
import { createInterface } from 'readline';
import chalk from 'chalk';

const tasks = [];
const DB_FILE = 'tasks.txt';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

function displayMenu() {
  console.log(`🦊🦊🦊🦊🦊 ${chalk.redBright.bold('To Do App')} 🦊🦊🦊🦊🦊\n`);
  console.log(chalk.blueBright('Menú de Opciones:'));
  console.log('1. Agregar tarea');
  console.log('2. Listar tareas');
  console.log('3. Completar tarea');
  console.log('4. Salir');
  console.log('\n\n');
}

function loadTask() {
  try {
    const data = readFileSync(DB_FILE, 'utf-8');
    const lines = data.split('\n');
    tasks.length = 0;
    
    lines.forEach((line) => {
      if (line.trim() !== '') {
        const [task, completed] = line.split("|");
        tasks.push({task, completed: completed === true});
      }
    });
    console.log(chalk.green.bold('Las tareas se han cargado desde la BD\n'));
  } catch (err) {
    console.log(chalk.green.bold(`No hay tareas pendientes 😉👌🏻\n`));
  }
}

function saveTask() {
  const data = tasks.map((task) => `${task.task}|${task.completed}`).join('\n');
  writeFileSync(DB_FILE, data, 'utf-8');
  console.log(chalk.green.bold(`Tareas agregadas a la BD con éxito 👌🏻\n`));
}

function addTask() {
  rl.question(chalk.bgMagentaBright('Escribe la tarea: '), (task) => {
    tasks.push({ task, completed: false });
    console.log(chalk.green.bold('Tarea agregada con éxito\n\n'));
    saveTask();
    displayMenu();
    chooseOption();
    console.log(tasks);
  });
}

function listTasks () {
  console.log(chalk.yellow.bold(`\n🦊🦊🦊🦊🦊 ${chalk.redBright.bold('To Do App')} 🦊🦊🦊🦊🦊\n`));

  if (tasks.length === 0) {
    console.log(chalk.green.bold(`No hay tareas por hacer 😉👌🏻\n`));
  } else {
    tasks.forEach((task, index) => {
      let status = task.completed ? '✅' : '❌';

      if (task.completed) {
        console.log(chalk.greenBright(`${index + 1}. ${status} - ${task.task}`));
      } else {
        console.log(chalk.redBright(`${index + 1}. ${status} - ${task.task}`));
      }
    });
  }
  
  loadTask();
  displayMenu();
  chooseOption();
}

function completeTask() {
  rl.question(chalk.bgMagentaBright('Escribe el número de la tarea a completar: '), (taskNumber) => {
    const index = parseInt(taskNumber) -1;
    if (index >= 0 && index < tasks.length) {
      tasks[index].completed = true;
      saveTask();
      console.log(chalk.green.bold('Tarea completada con éxito ✅\n'));
    } else {
      console.log(chalk.red.bold('Número de tarea no válido\n'));
    }
    displayMenu();
    chooseOption();
  });
}
function chooseOption() {
  rl.question('Elige una opción: ', (choice) => {
    switch (choice) {
      case '1':
        addTask();
        break;
      case '2':
        listTasks();
        break;
      case '3':
        completeTask();
        break;
      case '4':
        console.log(chalk.yellow(`Adiós 👋🦊`));
        rl.close();
        break;
      default:
        console.log(chalk.red('Opción no válida, intenta nuevamente\n'));
        displayMenu();
        chooseOption();
    }
  });
}
displayMenu();
chooseOption()