import { createInterface } from 'readline';
import chalk from 'chalk';

const tasks = [];

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

function displayMenu() {
  console.log(`🦊🦊🦊🦊🦊 ${chalk.redBright.bold('To Do App')} 🦊🦊🦊🦊🦊`);
  console.log('1. Agregar tarea');
  console.log('2. Listar tareas');
  console.log('3. Completar tarea');
  console.log('4. Salir');
}

displayMenu();