"use strict";
exports.__esModule = true;
var Cliente_1 = require("./Cliente");
var OperadorDeSistema_1 = require("./OperadorDeSistema");
var Gerente_1 = require("./Gerente");
var RepositorioDeUsuario = /** @class */ (function () {
    function RepositorioDeUsuario() {
        this.clientes = new Array();
        this.mapadeusuario = new Map();
        this.operadores = new Array();
        //TODO MUNDO
        this.usuarios = new Array();
    }
    RepositorioDeUsuario.prototype.procurarUsuarioLogado = function (email) {
        for (var _i = 0, _a = this.usuarios; _i < _a.length; _i++) {
            var usuario = _a[_i];
            if (usuario.getEmail() == email) {
                if (usuario instanceof Gerente_1.Gerente || usuario instanceof Cliente_1.Cliente || usuario instanceof OperadorDeSistema_1.OperadorDeSistema) {
                    return usuario;
                }
            }
        }
        return null;
    };
    RepositorioDeUsuario.prototype.removerOperador = function (email) {
        if (!this.mapadeusuario.has(email)) {
            return false;
        }
        this.mapadeusuario["delete"](email);
        return true;
    };
    RepositorioDeUsuario.prototype.listarClientes = function () {
        for (var _i = 0, _a = this.mapadeusuario.values(); _i < _a.length; _i++) {
            var usuario = _a[_i];
            if (usuario instanceof Cliente_1.Cliente) {
                this.clientes.push(usuario);
            }
        }
        return this.clientes;
    };
    /*
        public listarOperadores() : Array<Funcionario>{
            for(let funcionario of this.mapadeusuario.values()){
                if(funcionario instanceof OperadorDeSistema){
                    this.operadores.push(funcionario);
                }
            }return this.operadores;
            
        }
        */
    RepositorioDeUsuario.prototype.listarOperadores = function () {
        console.log(this.operadores.length);
        return this.operadores;
    };
    RepositorioDeUsuario.prototype.procurarCliente = function (email) {
        for (var _i = 0, _a = this.mapadeusuario.values(); _i < _a.length; _i++) {
            var usuario = _a[_i];
            if (usuario instanceof Cliente_1.Cliente && usuario.getEmail() == email) {
                return usuario;
            }
        }
        return null;
    };
    /*
    public adicionarOperador ( nome: string, email: string, senha: string, matricula:string, salario: number) : OperadorDeSistema{
        
        // let operacao: Usuario =  new OperadorDeSistema (nome, email, senha, matricula, salario);

        let operacao: OperadorDeSistema = new OperadorDeSistema (nome, email, senha, matricula, salario);
        this.operadores.push(operacao);
        return operacao;

    }*/
    RepositorioDeUsuario.prototype.adicionarOperador = function (op) {
        // let operacao: Usuario =  new OperadorDeSistema (nome, email, senha, matricula, salario);
        //console.log(op.getEmail());
        this.operadores.push(op);
        // return op;
    };
    RepositorioDeUsuario.prototype.usuarioLogin = function (email, senha) {
        for (var _i = 0, _a = this.usuarios; _i < _a.length; _i++) {
            var usuario = _a[_i];
            if (usuario.getEmail() == email && usuario.getSenha() == senha) {
                return usuario;
            }
        }
        return null;
    };
    return RepositorioDeUsuario;
}());
exports.RepositorioDeUsuario = RepositorioDeUsuario;
