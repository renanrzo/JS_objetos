const cliente = {
    nome:String = "André",
    idade:Number = 32,
    cpf:String = "11111111111",
    email:String = "andre@dominio.com"
};

console.log(`O nome do novo cliente é: ${cliente.nome} e ele tem ${cliente.idade} anos de idade seu e-mail é: ${cliente.email}`);
console.log(`os três primeiros digitos do cpf dele são: ${cliente.cpf.substring(0, 3)}`);
