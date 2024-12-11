//1- No nosso dia a dia, o uso de senhas é algo comum, pois usamos muitos sistemas ou aplicativos diferentes.
//Como recomendação de segurança, é necessário que para cada aplicativo que usamos, seja gerada uma senha segura.
//Usando a técnica de arrays, gere 5 senhas que contenham pelo menos 10 caracteres, 
//contendo pelo menos 5 letras, sendo 2 maiúsculas e 2 minúsculas, 2 números e um caractere especial 
//(ponto, hashtag, barra, ponto de interrogação, arroba). Use a tabela ASCII como base para gerar caracteres aleatórios.


function gerarSenhaAleatoria(): string {
    const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.#/?@";

    let senha = "";
    for (let i = 0; i < 10; i++) {
      senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    return senha;
  }

  const senhas = Array(5).fill(null).map(() => gerarSenhaAleatoria());
  console.log(senhas);
