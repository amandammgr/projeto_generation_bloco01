import { FilmeRepository } from "../repository/FilmeRepository";
import { Filme } from "../src/model/Filme";


export class FilmeController implements FilmeRepository{
    procurarPorId(id: number): void {
        throw new Error("Method not implemented.");
    }
    listarTodos(): void {
        for(let filme of this.listaFilmes) {
            filme.visualizar();
        }
    }
    cadastrar(filme: Filme): void {
        this.listaFilmes.push(filme);
        console.log("O filme foi cadastrado com sucesso!");
    }
    atualizar(filme: Filme): void {
        let buscarFilme = this.buscarNoArray(filme.id);

        if(buscarFilme !== null){
            this.listaFilmes[this.listaFilmes.indexOf(buscarFilme)] = filme;
            console.log("\nO filme foi atualizada!")
        } else
            console.log("\nO filme não foi encontrada!");
    }
    deletar(id: number): void {
        let buscarFilme = this.buscarNoArray(id);

        if(buscarFilme !== null){
            this.listaFilmes.splice(this.listaFilmes.indexOf(buscarFilme, 1));
            console.log("\no filme foi excluido!")
        } else
            console.log("\nO filme não foi encontrado!");
    }

    private listaFilmes: Array<Filme> = new Array<Filme>();

   public numero: number = 0;
    
   public buscarNoArray(id: number): Filme | null{
    for (let filme of this.listaFilmes){
        if (filme.id === id)
            return filme;

    }

    return null;
}
    
}