import { Usuario } from "./Usuario";
import { Cliente } from './Cliente';
import { OperadorDeSistema } from './OperadorDeSistema';
import { Funcionario } from './Funcionario';
import { Gerente } from "./Gerente";

export class RepositorioDeUsuario{
    private operadores : Array<OperadorDeSistema>;
    private mapadeusuario : Map<string,Usuario>;
    private clientes  : Array<Cliente>;
    public  usuarios : Array<Usuario>;

    public constructor(){
     this.clientes = new Array<Cliente>();
     this.mapadeusuario  = new Map<string, Usuario>();
     this.operadores = new Array<OperadorDeSistema>();
    
     //TODO MUNDO
     this.usuarios = new Array<Usuario>();

    }
    public procurarUsuarioLogado(email: string) : Usuario | null {
        for(let usuario of this.usuarios){
            if(usuario.getEmail() == email){
                if(usuario instanceof Gerente || usuario instanceof Cliente || usuario instanceof OperadorDeSistema){
                    return usuario;
                }
            }
        }

        return null;
    }

    public removerOperador(email: string):boolean{
        if(!this.mapadeusuario.has(email)){
            return false;

        }
        this.mapadeusuario.delete(email);
        return true;
        
    }

    public listarClientes(): Array<Cliente>{

       
        for(let usuario of this.mapadeusuario.values()){
            if(usuario instanceof Cliente){
                this.clientes.push(usuario);

            }
        } 
        return this.clientes;

    }
/*
    public listarOperadores() : Array<Funcionario>{
        for(let funcionario of this.mapadeusuario.values()){
            if(funcionario instanceof OperadorDeSistema){
                this.operadores.push(funcionario);
            }
        }return this.operadores;
        
    }
    */
   public listarOperadores() : Array<OperadorDeSistema>{
       console.log(this.operadores.length);
    return this.operadores;
    
}

    public procurarCliente(email : string) : Cliente |null{
        for(let usuario of this.mapadeusuario.values()){
            if(usuario instanceof Cliente && usuario.getEmail()== email){
                return usuario;
            }
        }
        return null;



    }

    /*
    public adicionarOperador ( nome: string, email: string, senha: string, matricula:string, salario: number) : OperadorDeSistema{  
        
        // let operacao: Usuario =  new OperadorDeSistema (nome, email, senha, matricula, salario);

        let operacao: OperadorDeSistema = new OperadorDeSistema (nome, email, senha, matricula, salario);
        this.operadores.push(operacao);
        return operacao;

    }*/

    public adicionarOperador (op:OperadorDeSistema) : void {  
        
        // let operacao: Usuario =  new OperadorDeSistema (nome, email, senha, matricula, salario);
        //console.log(op.getEmail());
        this.operadores.push(op);
       // return op;

    }
    
    public usuarioLogin(email : string, senha : string) : Usuario | null{
        for(let usuario of this.usuarios){
            if(usuario.getEmail() == email && usuario.getSenha() ==  senha){
                return usuario;


            }
        } return null;
    }
    

    

}