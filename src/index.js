class Paciente{
    constructor(){
        this.id = 1;
        this.arrayPacientes = []
    
    }
        
    salvar(){
       let paciente = this.lerDados();

       this.validaCampos(paciente);

       console.log(paciente);
    }

    lerDados(){
        let paciente = {}

        paciente.id = this.id;
        paciente.nome = document.getElementById("nome").value;
        paciente.dia = document.getElementById("dia").value;
        paciente.valor = document.getElementById("valor").value;

        return paciente;
       

    }

    validaCampos(paciente){
        let msg = " ";
        
        if(paciente.nome==" "){
            msg += "Informe o Nome do Paciente\n"
        }

        if(paciente.dia==" "){
            msg += "Informe o dia de pagamento\n"
        }
        if(paciente.valor==" "){
            msg += "Informe o valor\n"
        }


        if (msg != " "){
            alert(msg)
            return false
        }

        return true
    }

    cancelar(){
       
    }
}

var paciente = new Paciente()