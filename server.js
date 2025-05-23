import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(join(__dirname, 'dist')));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
