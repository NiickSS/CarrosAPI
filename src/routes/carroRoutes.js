import express, { Router } from "express";
import CarroController from "../controllers/carroController.js";

const routes = express.Router();

routes.get("/carros", CarroController.listarCarros);
routes.get("/carros/:id", CarroController.listarCarrosPorMarca);
routes.get("/carros/:id", CarroController.listarCarrosPorId);
routes.post("/carros", CarroController.cadastrarCarro);
routes.put("/carros/:id", CarroController.atualizarCarro);
routes.delete("/carros/:id", CarroController.excluirCarro);

export default routes;
