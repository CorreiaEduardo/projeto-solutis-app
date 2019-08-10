import { Component, OnInit } from '@angular/core';
import { ContaService } from 'src/app/Service/conta.service';
import { Router } from '@angular/router';
import { Conta } from 'src/app/Model/Conta';
import { ToastrService } from 'ngx-toastr';
import { Parcela } from 'src/app/Model/Parcela';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-conta-receber-listar',
  templateUrl: './conta-receber-listar.component.html',
  styleUrls: ['./conta-receber-listar.component.css']
})
export class ContaReceberListarComponent implements OnInit {

  contas:Array<any>;
  contaSelec:Conta;
  parcelasContaSelec:Parcela[];
  constructor(private service:ContaService, private router:Router, private toastr:ToastrService){}

  ngOnInit() {
    this.atualizarListagem();
  }

  receberPagamento(conta:Conta){
    this.service.receberPagamento(conta).subscribe(data =>{
      this.toastr.success("O pagamento foi recebido","Operação efetuada");
      this.atualizarListagem();
    });
  }

  abrirModal(conta:Conta){
    if(conta.fixo){
      this.toastr.error("Contas fixas não possuem parcelas","Operação inválida");
      return;
    }
    this.contaSelec = conta;
    this.parcelasContaSelec = conta.parcelas;
    $('#modalVerParcelas').modal('show');
  }
  receberParcela(){
    this.service.receberParcelaPagamento(this.contaSelec).subscribe(data=>{
      $('#modalVerParcelas').modal('hide');
      this.toastr.success('A parcela foi recebida!','Operação bem sucedida');
      this.atualizarListagem();
    });
  }

  abrirModalNovaConta(){
    $('#modalNovaConta').modal('show');
  }

  abrirModalEditarConta(conta:Conta){
    if(conta.fixo){
      this.contaSelec = conta;
      $('#modalEditarConta').modal('show');
    }else{
      this.toastr.error("Contas não fixas não podem ser editadas","Operação inválida");
      return;
    }
  }

  editar(valor){
    let contaEditada = this.contaSelec;
    contaEditada.valor = valor;
    this.service.editarConta(contaEditada).subscribe(data =>{
      $('#modalEditarConta').modal('hide');
    });
    
  }

  salvar(nome,valor,ciclo,parcelas){
    let fixo = ciclo =="Permanente" ? 1:0;
    let data = new Date();
    let conta = new Conta(nome,valor,fixo,"RECEBER",parcelas,formatDate(new Date(), 'yyyy-MM-dd','en'));
    this.service.salvarConta(conta).subscribe(data=>{
      $('#modalNovaConta').modal('hide');
      
      this.atualizarListagem();
      this.toastr.success("O conta foi cadastrada","Operação efetuada");
    });
  }

  atualizarListagem(){
    this.service.obterContasAReceber().subscribe(contas =>{
      this.contas = contas;
    });
  }
}
