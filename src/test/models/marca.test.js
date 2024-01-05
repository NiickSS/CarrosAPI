import { describe, it, expect } from "@jest/globals";
import Marca from "../../models/Marca.js";

describe("Testando o modelo Marca", () => {
    const objMarca = {
        nome: "Mitsubishi",
        nacionalidade: "Japao"
    };

    it("Deve instanciar uma nova marca", () => {
        const marca = {
            nome: "Mitsubishi",
            nacionalidade: "Japao"
        };

        expect(marca).toEqual(objMarca);
    });

});
