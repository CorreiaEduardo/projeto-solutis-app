import { Component, OnInit } from '@angular/core';
import { ContaService } from 'src/app/Service/conta.service';
import { Router } from '@angular/router';
import {ModalEvent} from 'bootstrap';
import { Conta } from 'src/app/Model/Conta';
import { Parcela } from 'src/app/Model/Parcela';
import { ToastrService } from 'ngx-toastr';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-conta-pagar-listar',
  templateUrl: './conta-pagar-listar.component.html',
  styleUrls: ['./conta-pagar-listar.component.css']
})
export class ContaPagarListarComponent implements OnInit {

  contas:Array<any>;
  contaSelec:Conta;
  parcelasContaSelec:Parcela[];
  constructor(private service:ContaService, private router:Router, private toastr:ToastrService){}

  ngOnInit() {
    this.atualizarListagem();
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

  pagarParcela(){
    this.service.pagarParcela(this.contaSelec).subscribe(data =>{
      $('#modalVerParcelas').modal('hide');
      this.toastr.success('A parcela foi paga!','Operação bem sucedida');
      this.atualizarListagem();
    });
    
  }
  
  pagarConta(conta:Conta){
    this.service.pagarConta(conta).subscribe(data =>{
      this.toastr.success("O conta foi paga","Operação efetuada");
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
    let conta = new Conta(nome,valor,fixo,"PAGAR",parcelas,formatDate(new Date(), 'yyyy-MM-dd','en'));
    console.log(conta);
    
    this.service.salvarConta(conta).subscribe(data=>{
      $('#modalNovaConta').modal('hide');
      this.toastr.success("O conta foi cadastrada","Operação efetuada");
      this.atualizarListagem();
      
    });
  }

  atualizarListagem(){
    this.service.obterContasAPagar().subscribe(contas =>{
      this.contas = contas;
    });
  }

}
