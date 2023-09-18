import { createInterface } from 'readline';
import chalk from 'chalk';

const tasks = [];

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
  console.log('\n');
}

function addTask() {
  rl.question(chalk.bgMagentaBright('Escribe la tarea: '), (task) => {
    tasks.push({ task, complete: false });
    console.log(chalk.green.bold('Tarea agregada con éxito\n\n'));
    displayMenu();
    chooseOption();
    console.log(tasks);
  });
}

function listTasks () {
  console.log(chalk.yellow.bold(`\n🦊🦊🦊🦊🦊 ${chalk.redBright.bold('To Do App')} 🦊🦊🦊🦊🦊\n`));

  if (tasks.length === 0) {
    console.log(chalk.green.bold(`No hay tareas por hacer \n\n`));
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
  
  displayMenu();
  chooseOption();

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
        console.log("Completar Tarea");
        break;
      case '4':
        console.log(chalk.yellow(`Adiós 👋🦊`));
        rl.close();
        break;
      default:
        console.log(chalk.red('Opción inválida, intenta nuevamente \n\n'));
        displayMenu();
        chooseOption();
    }
  });
}
displayMenu();
chooseOption()