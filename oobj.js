function Pedido(nome, tipo, massa, sabor, camadas, kilos, confeito){
    this.nome = nome
    this.tipo = tipo;
    this.massa = massa;
    this.sabor = sabor;
    this.camadas = camadas;
    this.kilos = kilos;
    this.confeito = confeito;

    Cliente.call(this, nome);
    Descricao.call(this, tipo);

}

function Cliente(nome, tipo){
    this.nome = nome,
    this.saudacao = function(){
        console.log(this.nome + " você escolheu " + this.tipo + ", boa escolha");
    }
}

function Descricao(tipo){
    this.tipo = tipo,
    this.descricao = function(){
        console.log(this.tipo + " de " + this.sabor + ", massa " + this.massa + " com " + this.confeito)
    }
}



const paula = new Pedido ("Paula", "Bolo de festa", "branca", "ninho", 2, 5, "granulado");
const sonia = new Pedido ("Sonia", "Bolo de pote", "chocolate", "morango", 3, 0.5, "chantilly");
const ana = new Pedido ("Ana", "Torta", "biscoito", "limão", 2, 2, "suspiro");


paula.saudacao();
paula.descricao();
sonia.saudacao();
sonia.descricao();
ana.saudacao();
ana.descricao();
