import { describe, it, expect, jest } from "@jest/globals";
import {marca, marcaSchema} from "../../models/Marca.js";

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

    it("Deve simular uma chamada ao BD", () => {
        const marca2 = {
            nome: "teste",
            nacionalidade: "teste2"
        };

        marca.salvar = jest.fn().mockReturnValue({
            nome: "teste",
            nacionalidade: "teste2"
        });

        const retorno = marca.salvar()

        expect(retorno).toEqual(
            expect.objectContaining({
                ...marca2
            }),
        );
    });
});
