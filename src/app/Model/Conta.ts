import { Parcela } from './Parcela';

export class Conta{

    constructor(nome,valor,fixo,tipo,qtdParcelas,dataOperacao){
        this.nome=nome;
        this.valor=valor;
        this.fixo = fixo;
        this.tipo=tipo;
        this.qtdParcelas=qtdParcelas;
        this.dataOperacao = dataOperacao;
    }

    id:number;
    nome:String;
    valor:number;
    fixo:boolean;
    tipo:String;
    qtdParcelas:number;
    dataOperacao:String;
    parcelas:Parcela[]
}