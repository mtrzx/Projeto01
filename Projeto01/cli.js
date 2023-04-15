import pegaArquivo from "./index.js";
import chalk from "chalk";
import validaURL from "./http-validacao.js";
import validaURLArray from './arrayLinks.js';

const caminho = process.argv;
const texto = console.log("A interface File provê informações sobre arquivos e permite ao JavaScript  a acessar seu conteúdo. São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)")

async function processaTexto(caminhoDoArquivo){
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);
    if (caminho[3] === 'validar'){
        console.log(chalk.bgYellow("links validados"), await validaURL(resultado));
    }else if(caminho[3]=== 'links'){        
        console.log(chalk.bgGrey.yellow('lista de links em array'), validaURLArray(resultado));
    }
    else if(caminho[3] === 'leitura'){
        console.log(chalk.bgYellow.black("Texto do texto.md"),texto);
    }else{
        console.log("Erro no programa")
    }
}

processaTexto(caminho);


export default validaURL;