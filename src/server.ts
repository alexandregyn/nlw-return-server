import express from 'express';
import { routes } from './routes';

const app = express();
app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log('Servidor em execução!');
});

/**Parei nesse momento da aula
 * https://youtu.be/bm2dnsPqcek?t=5437
 */