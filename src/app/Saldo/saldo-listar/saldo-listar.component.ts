import { Component, OnInit } from '@angular/core';
import { ResumoService } from 'src/app/Service/resumo.service';
import { Parcela } from 'src/app/Model/Parcela';

@Component({
  selector: 'app-saldo-listar',
  templateUrl: './saldo-listar.component.html',
  styleUrls: ['./saldo-listar.component.css']
})
export class SaldoListarComponent implements OnInit {

  dataFiltro:String;
  saldo:number;
  parcelas:Parcela[];
  constructor(private service:ResumoService) { }

  ngOnInit() {
  }
  buscar(data){
    let ano = data.split("-")[0];
    let mes = data.split("-")[1];
    this.service.obterResumoMensal(mes,ano).subscribe(data =>{
      this.saldo=data.saldo;
      this.parcelas=data.parcelas;
    });
  }
}
