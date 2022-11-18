/*alert("Iniciaremos o cadastro do paciente!")
//Apenas testando a inserção de dados

let lista = []

let opcao = 0

do{

opcao = prompt("PACIENTES CADASTRADOS: " + lista.length + "\n\nEscolha uma opção: \n 1 - Inserir Paciente \n 2 - Remover Paciente \n 3 - Exibir Pacientes \n 4 - Sair")
        
        switch (opcao){

        case "1":
            const paciente = {}

            paciente.primeiroNome = prompt("Insira o seu primeiro nome: ")
            paciente.sobrenome = prompt("Insira o seu sobrenome: ")
            paciente.cpf = prompt("Insira o CPF do paciente: ")
            paciente.idade = prompt("Insira idade do paciente: ")
            paciente.idade = parseInt(paciente.idade)   
            
            const confirmacao = confirm(
                "Salvar paciente? \n" +
                "\n Nome: " + paciente.primeiroNome +
                "\n Sobrenome: " + paciente.sobrenome +
                "\n CPF: " + paciente.cpf +
                "\n Idade: " + paciente.idade
            )
            if(confirmacao){
                lista.push(paciente)
            }
            console.table(paciente)

        break

        case "2":
        break

        case "3":
            
        break

        case "4":
            alert("Opção Sair Escolhida")
        break

        default:
        alert("Nenhuma opção válida...")
        break
    }
} while (opcao!=="4")*/