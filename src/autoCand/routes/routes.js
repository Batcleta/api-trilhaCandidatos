const e = require("express");

const Routes = e.Router();

Routes.get("/teste", (req, res) => {
  res.json({
    fraseDoDia:
      "Meu a vida é igual um minigame, um dia você faz mais pontos outro dia menos pontos, mais o importante meu é fica na média!!!",
    ass: "Luiz Boça",
  });
});

module.exports = Routes;
