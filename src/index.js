class Paciente{
    constructor(){
        this.id = 1;
        this.arrayPacientes = [];
        this.editId = null;
          
    }
        
    salvar(){

       let paciente = this.lerDados();

       if(this.validaCampos(paciente)){
            if(this.editId==null){
            this.adicionar(paciente);
           } else {
            this.atualizar(this.editId, paciente);
           }
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
            td_acoes.classList.add("center");

            let imgEdit = document.createElement("img");
            imgEdit.src = "img/edit.png";
            imgEdit.setAttribute("onclick", "paciente.preparaEdicao("+ JSON.stringify(this.arrayPacientes[i]) +")");

            let imgDelete = document.createElement("img");
            imgDelete.src = "img/delete.png";
            imgDelete.setAttribute("onclick", "paciente.deletar("+ this.arrayPacientes[i].id +")");

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);
            console.log(this.arrayPacientes);

        }
    }

    adicionar(paciente){
        paciente.dia = parseFloat(paciente.dia)
        paciente.valor = parseFloat(paciente.valor)
        this.arrayPacientes.push(paciente);
        this.id++;
    }

    atualizar(id, paciente){
        for (let i=0; i<this.arrayPacientes.length; i++){
            if (this.arrayPacientes[i].id == id){
                this.arrayPacientes[i].nomePaciente  = paciente.nomePaciente;
                this.arrayPacientes[i].dia  = paciente.dia;
                this.arrayPacientes[i].valor  = paciente.valor;
            }
        }
    }

    preparaEdicao(dados){
        this.editId = dados.id;
        document.getElementById("nomePaciente").value = dados.nomePaciente;
        document.getElementById("dia").value = dados.dia;
        document.getElementById("valor").value = dados.valor;
        document.getElementById("btn1").innerText = "Atualizar";

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

        if(paciente.dia=="" || paciente.dia < 1 || paciente.dia > 31){
            msg += "Informe o dia de pagamento entre 1 e 31\n"
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
        document.getElementById("btn1").innerText = "Salvar";
        this.editId = null;
       
    }

    deletar(id){

        if(confirm("Deseja realmente deletar o paciente do ID " +id+ " ?")){
         let tbody = document.getElementById("tbody");

        for(let i=0; i < this.arrayPacientes.length; i++){
            if(this.arrayPacientes[i].id == id){
                this.arrayPacientes.splice(i,1);
                tbody.deleteRow(i);
            }
        }
        
    }
       console.log(this.arrayPacientes)
    }
}

var paciente = new Paciente();