const cliente = {
    nome:String = "André",
    idade:Number = 32,
    cpf:String = "11111111111",
    email:String = "andre@dominio.com"
};

console.log(`O nome do novo cliente é: ${cliente["nome"]} e ele tem ${cliente["idade"]} anos de idade seu e-mail é: ${cliente["email"]}`);

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach( (chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
})
