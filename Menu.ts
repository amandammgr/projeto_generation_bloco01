import readlinesync from "readline-sync";
import { colors } from "./src/util/Colors";
import { Romance } from "./src/model/Romance";
import { Terror } from "./src/model/Terror";
import { FilmeController } from "./controller/FilmeController";
import { Filme } from "./src/model/Filme";
export function main() {


    let opcao: number;
    let numero: number;
    let nome, comediaRomantica, romanceCliche, sobrenatural, suspense: string;
    let id, tipo, preco: number;
    const tipoFilmes = ['Romance', 'Terror'];
    const filmes: FilmeController = new FilmeController()

    while (true) {

        console.log(colors.bg.black, colors.fg.redstrong,
            "*****************************************************");
        console.log("                                                     ");
        console.log("                   JSMovies                          ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Filme                          ");
        console.log("            2 - Listar todos os Filmes               ");
        console.log("            3 - Buscar Filme por ID                  ");
        console.log("            4 - Atualizar Dados do Filme             ");
        console.log("            5 - Apagar Filme                         ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log("\nJSMovies, a diversão começa aqui!");
            sobre();
            process.exit(0);
        }
        switch (opcao) {
            case 1:
                console.log("\n\nCriar Filme\n\n");
                console.log('Digite o nome do Filme: ');
                nome = readlinesync.question("");


                console.log('Digite o ID do filme: ');
                id = readlinesync.questionInt("");


                console.log('Digite o Tipo do filme: ');
                tipo = readlinesync.keyInSelect(tipoFilmes, "", { cancel: false }) + 1;

                console.log('Digite o preço do filme: ');
                preco = readlinesync.questionFloat("");

                switch (tipo) {
                    case 1:
                        console.log('Digite o nome de uma Comedia Romantica: ');
                        comediaRomantica = readlinesync.question("");
                        console.log('Digite o nome de um Filme Cliche: ');
                        romanceCliche = readlinesync.question("");
                        filmes.cadastrar(
                            new Romance (id, tipo, preco, comediaRomantica, romanceCliche, nome )
                        )
                        break;
                    case 2:
                        console.log('Digite o nome de um Filme Sobrenatural: ');
                        sobrenatural = readlinesync.question("");
                        console.log('Digite o nome de um Filme de Suspense: ');
                        suspense = readlinesync.question("");
                        filmes.cadastrar(
                            new Romance (id, tipo, preco, sobrenatural, suspense, nome )
                        )
                        break;
                }

                keyPress()
                break;

            case 2:
                console.log("\n\nListar todos os Filmes\n\n");
                filmes.listarTodos();

                keyPress()
                break;
            case 3:
                console.log("\n\nBuscar filme por ID\n\n");
                console.log("Digite o numero do ID: ")
                id = readlinesync.questionInt("");

                filmes.procurarPorId(id);

                keyPress()
                break;
            case 4:
                console.log("\n\nAtualizar dados do Filme\n\n");
                console.log("Digite o ID do filme: ")
                id = readlinesync.questionInt("");
                let filme = filmes.buscarNoArray(id);

                if (filme) {

                    console.log('Digite o ID do filme: ');
                    id = readlinesync.questionInt("");

                    console.log('Digite o nome do Filme: ');
                    nome = readlinesync.question("");

                    console.log('Digite o preço do Filme: ');
                    preco = readlinesync.questionFloat("");

                    tipo = filme.tipo;
                    switch (tipo) {
                        case 1:
                        console.log('Digite o nome de uma Comedia Romantica: ');
                        comediaRomantica = readlinesync.question("");
                        console.log('Digite o nome de um Filme Cliche: ');
                        romanceCliche = readlinesync.question("");
                        filmes.atualizar(
                            new Romance (id, tipo, preco, comediaRomantica, romanceCliche, nome )
                        )
                            break;
                        case 2:
                        console.log('Digite o nome de um Filme Sobrenatural: ');
                        sobrenatural = readlinesync.question("");
                        console.log('Digite o nome de um Filme de Suspense: ');
                        suspense = readlinesync.question("");
                        filmes.atualizar(
                            new Romance (id, tipo, preco, sobrenatural, suspense, nome )
                        )
                            break;
                    }
                } else {
                    console.log("\nConta nao encontrada!");
                }


                keyPress()
                break;

            case 5:
                console.log("\n\nApagar um Filme\n\n");
                console.log("Digite o ID do Filme: ");
                id = readlinesync.questionInt("");

                filmes.deletar(id);

                keyPress()
                break;

            default:
                console.log("\nOpção Inválida!\n");
                keyPress()
                break;
        }
    }



    function sobre(): void {
        console.log("\n*****************************************************");
        console.log("Projeto Desenvolvido por: Amanda Machado Magro");
        console.log("Amanda Machado Magro - amandamachadomgr@gmail.com");
        console.log("github.com/amandammgr/conta_bancaria");
        console.log("*****************************************************");
    }

    function keyPress(): void {
        console.log(colors.reset, "");
        console.log("\nPressione enter para continuar...");
        readlinesync.prompt();

    }

}
main();

