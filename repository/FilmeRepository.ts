import { Filme } from "../src/model/Filme";

export interface FilmeRepository{

    // Métodos do CRUD

    procurarPorId(id: number): void;
    listarTodos(): void;
    cadastrar(filme: Filme): void;
    atualizar(filme: Filme): void;
    deletar(id: number): void;

}