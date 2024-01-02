import express from "express";
import carros from "./carroRoutes.js";
import marcas from "./marcaRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res)=> res.status(200).send("API de carros!"));

    app.use(express.json(), carros, marcas);
};

export default routes;