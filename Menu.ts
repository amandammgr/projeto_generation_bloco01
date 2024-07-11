import readlinesync from "readline-sync";
import { colors } from "./src/util/Colors";

export function main() {


    let opcao: number;

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

                break;

            case 2:
                console.log("\n\nListar todos os Filmes\n\n");

                keyPress()
                break;
            case 3:
                console.log("\n\nBuscar filme por ID\n\n");

                keyPress()
                break;
            case 4:
                console.log("\n\nAtualizar dados do Filme\n\n");

                keyPress()
                break;

            case 5:
                console.log("\n\nApagar um Filme\n\n");

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

