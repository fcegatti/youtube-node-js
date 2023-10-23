import express from 'express';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
// import taskController from '.controllers/taskController.js';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

console.log(__dirname);