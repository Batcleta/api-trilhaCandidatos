const Express = require("express");
const cors = require("cors");
require("dotenv").config();

const routes = require("./autoCand/routes/routes");

require("./database");

const app = Express();

app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
