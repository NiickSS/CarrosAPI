import app from "../../app.js";
import request from "supertest";

let server;
beforeEach(() => {
    const port = 3000;
    server = app.listen(port);
});

afterEach( () => {
    server.close();
});

describe("GET em /marcas", () => {
    it("Deve retornar uma lista de marcas", async () => {
        const resposta = await request(app)
            .get("/marcas")
            .set("Accept", "application/json")
            .expect("content-type", /json/)
            .expect(200);

        expect(resposta.body[0].nome).toEqual("Volkswagen");
    });
});
let idResposta;
describe("POST em /marcas", () => {
    it("Deve adicionar uma nova marca", async () => {
        const resposta = await request(app)
            .post("/marcas")
            .send({
                nome: "Toyota",
                nacionalidade: "Japao"
            })
            .expect(201);

        idResposta = resposta.body.marca._id;
        //console.log(idResposta);
    });
});

describe("DELETE em /marcas", () => {
    it("Deve excluir a marca adicionada", async () => {
        await request(app)
            .delete(`/marcas/${idResposta}`)
            .expect(200);
    });
});

describe("GET em /marcas/id", () => {
    it("Deve retornar a marca adicionada", async () => {
        await request(app)
            .get(`/marcas/${idResposta}`)
            .expect(200);
    });
});
