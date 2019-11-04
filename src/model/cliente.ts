export class Cliente{
    id : string;
    cpf : string;
    email : string;
    nome : string;
    senha : string;

    setCliente(obj : any , id : any){
        this.id = id;
        this.cpf = obj.cpf;
        this.email = obj.email;
        this.nome = obj.nome;
        this.senha = obj.senha;
    }
}