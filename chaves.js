const cliente = {
    nome: "Jubileu",
    idade: 24,
    email: "jubileu@marinho.com.br",
    telefone: ["11111111", "2222222"],
};

cliente.enderecos = [
    {
        rua: "rua Joseph climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
  console.error("Erro! é necessário ter um endereço cadastrado")
}