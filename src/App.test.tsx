import axios from "axios";
import App from "./App";

jest.mock("axios");

const fakeUsers = [
  {
    id: 1,
    user: "Steve",
    username: "stevesantos",
  },
  {
    id: 2,
    user: "Fernanda",
    username: "fernandasilva",
  },
];

describe("App", () => {
  describe("Quando o carregamento terminar", () => {
    test("Não deve mostrar o carregamento", async () => {});

    test("Deve mostrar o título de Usuários", async () => {});

    test("Exibir o @ do usuário", async () => {});

    test("Exibir o nome do usuário", async () => {});
  });
});
