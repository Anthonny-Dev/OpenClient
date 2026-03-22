/*Utiliazando javascript vamos conectar com um banco de dados MySQL ou MongoDB para realizar os post e requests do site*/

// vamos criar os objetos

/*OBJETO USUARIO*/

const CLIENTES = [];
let proximoId = 1;

function mostrarClientes(){
    console.log('TODOS OS CLIENTE DA LISTA:\n\n');

    for(let c = 0; c < CLIENTES.length; c++){
        console.log(`ID CLIENTE: ${CLIENTES[c].idCliente}\nNOME CLIENTE: ${CLIENTES[c].nomeUsuario}\nEMAIL CLIENTE: ${CLIENTES[c].emailUsuario}\n\n`);
    }
}

function deletarCliente(){
    const prompt = require('prompt-sync')();

    console.log("DELETAR CLIENTES\n\n");

    var email = prompt('Email do Usuário: ');
    var senha = prompt('Senha do Usuário: ');

    let encontrado = false;

    for(let i = 0; i < CLIENTES.length; i++){
        if (email == CLIENTES[i].emailUsuario && senha == CLIENTES[i].senhaUsuario ) {
            console.log(`Cliente Encontrado : \n\nID CLIENTE: ${CLIENTES[i].idCliente}\nNOME CLIENTE: ${CLIENTES[i].nomeUsuario}\nEMAIL CLIENTE: ${CLIENTES[i].emailUsuario}`);
            CLIENTES.splice(i, 1);

            console.log("Cliente removido com sucesso!");
            encontrado = true;
            console.log(CLIENTES);
        }
    }
    if (!encontrado){
        console.log('\nNenhum Cliente encontrado!\n\n');
    }
}

function buscarClientes(){
    const prompt = require('prompt-sync')();

    console.log("BUSCAR CLIENTES\n\n");

    var email = prompt('Email do Usuário: ');
    var senha = prompt('Senha do Usuário: ');

    for(let i = 0; i < CLIENTES.length; i++){
        if (email == CLIENTES[i].emailUsuario && senha == CLIENTES[i].senhaUsuario ) {
            console.log(`Cliente Encontrado : \n\nID CLIENTE: ${CLIENTES[i].idCliente}\nNOME CLIENTE: ${CLIENTES[i].nomeUsuario}\nEMAIL CLIENTE: ${CLIENTES[i].emailUsuario}`);
        }
         else{
            console.log('\nNenhum Cliente encontrado!\n\n');
        }
        break;
    }
}

function cadastrarCliente(){

    const Cliente = {
        idCliente: 0,
        nomeUsuario : "",
        emailUsuario : "", 
        senhaUsuario: ""
    }

    const prompt = require('prompt-sync')();

    Cliente.idCliente = proximoId++;
    Cliente.nomeUsuario = prompt('Nome do Cliente: ');
    Cliente.emailUsuario = prompt('Email do Cliente: ');
    Cliente.senhaUsuario = prompt('Senha do Cliente: ');

    CLIENTES.push(Cliente);
    console.log("CLIENTE CADASTRADO! \n")

    console.log(CLIENTES);
}


function Menu(){
    const prompt = require('prompt-sync')();

    console.log("Gerenciador de Clientes em JavaScript\n");

    console.log("Menu\n1 - CADASTRAR CLIENTE\n2 - BUSCAR CLIENTES\n3 - DELETAR CLIENTE\n4 - MOSTRAR TODOS OS CLIENTES\n\n");

    const escolha = prompt('Escolha um serviço: ');

    while (true){
        if (escolha == 1){
            cadastrarCliente();
            return Menu();
        }
        if(escolha == 2){
            buscarClientes();
            return Menu();
        }
        if(escolha == 3){
            deletarCliente();
            return Menu();
        }
        if(escolha == 4){
            mostrarClientes();
            return Menu();
        }
    }
}

function teste(){
    console.log("Olá\n")
}
    
//Menu();