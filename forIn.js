const client = {
    nome: "Jubileu",
    idade: 24,
    email: "jubileu@marinho.com.br",
    telefone: ["11111111", "2222222"],
};

client.address = [
    {
      rua: "Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
];

for (let chave in client){
    let tipo = typeof client[chave]
    if (tipo !== "object" && tipo !== "function"){
    console.log(`A chave ${chave} tem o valor ${client[chave]}`);
    }
};