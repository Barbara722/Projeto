export class Login{
    id : string;
    email : string;
    senha : string;

    setLogin(obj : any , id : any ){
        this.id = id;
        this.email = obj.email;
        this.senha = obj.senha;
    }
}