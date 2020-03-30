export class Usuários{
    private login : string;
    private senha : string;

    public constructor(login:string, senha: string) {
        this.login = login;
        this.senha = senha;

    }
    public getLogin() : string{
        return this.login;

    }
    public setLogin(login : string): void{
        this.login = login;

    }

    public getSenha() : string{
        return this.senha;
    }
    public setSenha(senha: string) : void{
        this.senha= senha;
    }
}

