const e = require("express");
const Vagas = require("../controller/VagasController");
const Candidatos = require("../controller/CandidatosController");
const Capacitacao = require("../controller/CapacitacaoController");
const Experiencia = require("../controller/ExperienciaController");
const Video = require("../controller/VideoController");
// const ReportController = require('./src/controllers/ReportController')

const Routes = e.Router();

// Routes.get('/', (req, res) => res.json({ hello: 'world' }))

Routes.post("/vagas", Vagas.store);
Routes.get("/vagas", Vagas.index);
Routes.delete("/vagas", Vagas.delete);

Routes.post("/video", Video.store);

Routes.post("/vagas/:vaga_id/candidatos", Candidatos.store);
// Routes.get('/candidatos', Candidatos.indexPk)
Routes.get("/candidatos", Candidatos.findAll);

Routes.post("/candidatos/:candidato_id/capacitacao", Capacitacao.store);
// Routes.get('/capacitacao', Capacitacao.store)

Routes.post("/candidatos/:candidato_id/experiencia", Experiencia.store);
// Routes.get('/experiencia', Experiencia.store)

// Routes.get('/reports', ReportController.show)

module.exports = Routes;
