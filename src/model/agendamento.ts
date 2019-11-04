export class Agendamento{
    id : string;
    nome : string;
    sobrenome : string;
    data : string;
    horario : string;
    bairro: string;
    rua : string;
    cep : string;
    
    setPerfil(obj : any){
        this.id = obj.id
        this.nome = obj.id;
        this.sobrenome = obj;
        this.data = obj.nome;
        this.horario = obj.sobrenome;
        this.bairro = obj.email;
        this.rua = obj.email;
        this.cep = obj.email;


    }
}