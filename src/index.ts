//1- No nosso dia a dia, o uso de senhas é algo comum, pois usamos muitos sistemas ou aplicativos diferentes.
//Como recomendação de segurança, é necessário que para cada aplicativo que usamos, seja gerada uma senha segura.
//Usando a técnica de arrays, gere 5 senhas que contenham pelo menos 10 caracteres, 
//contendo pelo menos 5 letras, sendo 2 maiúsculas e 2 minúsculas, 2 números e um caractere especial 
//(ponto, hashtag, barra, ponto de interrogação, arroba). Use a tabela ASCII como base para gerar caracteres aleatórios.


function gerarSenhaAleatoria(): string {
    const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const caracteresEspeciais = '.#/?@';

    // Garantindo que a senha tenha pelo menos 2 maiúsculas, 2 minúsculas, 2 números e 1 caractere especial
    let senha = '';
    senha += obterCaracteresAleatorios(letrasMaiusculas, 2);
    senha += obterCaracteresAleatorios(letrasMinusculas, 2);
    senha += obterCaracteresAleatorios(numeros, 2);
    senha += obterCaracteresAleatorios(caracteresEspeciais, 1);

    // Preencher o restante da senha com caracteres aleatórios
    const todosOsCaracteres = letrasMaiusculas + letrasMinusculas + numeros + caracteresEspeciais;
    const comprimentoRestante = 10 - senha.length;
    senha += obterCaracteresAleatorios(todosOsCaracteres, comprimentoRestante);

    // Embaralhar a senha para garantir que os caracteres não estejam em ordem
    return embaralharString(senha);
}

function obterCaracteresAleatorios(caracteres: string, comprimento: number): string {
    let resultado = '';
    for (let i = 0; i < comprimento; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        resultado += caracteres[indiceAleatorio];
    }
    return resultado;
}

function embaralharString(string: string): string {
    return string.split('').sort(() => Math.random() - 0.5).join('');
}

function gerarMultiplaSenhas(contagem: number): string[] {
    const senhas: string[] = [];
    for (let i = 0; i < contagem; i++) {
        senhas.push(gerarSenhaAleatoria());
    }
    return senhas;
}

// Gerar 5 senhas
const senhas = gerarMultiplaSenhas(5);
console.log(senhas);
