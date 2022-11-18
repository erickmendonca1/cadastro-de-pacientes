class Paciente{
    constructor(){
        this.id = 1;
        this.arrayPacientes = [];
          
    }
        
    salvar(){

       let paciente = this.lerDados();

       if(this.validaCampos(paciente)){
            this.adicionar(paciente);
       }

       this.listaTabela();
       this.cancelar();

    }

    listaTabela(){
        let tbody = document.getElementById("tbody");
        tbody.innerText = "";

        for(let i=0; i<this.arrayPacientes.length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nomePaciente = tr.insertCell();
            let td_dia = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayPacientes[i].id;
            td_nomePaciente.innerText = this.arrayPacientes[i].nomePaciente;
            td_dia.innerText = this.arrayPacientes[i].dia;
            td_valor.innerText = this.arrayPacientes[i].valor;

            td_id.classList.add("center");

            let imgEdit = document.createElement("img");
            imgEdit.src = "img/edit.png";

            let imgDelete = document.createElement("img");
            imgDelete.src = "img/delete.png";

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);

        }
    }

    adicionar(paciente){
        this.arrayPacientes.push(paciente);
        this.id++;
    }

    lerDados(){
        let paciente = {}

        paciente.id = this.id;
        paciente.nomePaciente = document.getElementById("nomePaciente").value;
        paciente.dia = document.getElementById("dia").value;
        paciente.valor = document.getElementById("valor").value;

        return paciente;
       

    }

    validaCampos(paciente){
        let msg = "";
        
        if(paciente.nomePaciente==""){
            msg += "Informe o Nome do Paciente\n"
        }

        if(paciente.dia==""){
            msg += "Informe o dia de pagamento\n"
        }
        if(paciente.valor==""){
            msg += "Informe o valor\n"
        }
        if (msg != ""){
            alert(msg)
            return false
        }

        return true
    }

    cancelar(){

        document.getElementById("nomePaciente").value = "";
        document.getElementById("dia").value = "";
        document.getElementById("valor").value = "";
       
    }
}


var paciente = new Paciente();