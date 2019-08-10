import { Component } from '@angular/core';
import { ContaService } from './Service/conta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router:Router){}

  ngOnInit(){
    this.obterContasAPagar();
  }

  obterContasAReceber(){
    this.atualizarLinkAtivo();
    document.getElementById("liContasAReceber").classList.add("active");
    this.router.navigate(["receber"]);
  }
  obterContasAPagar(){
    this.atualizarLinkAtivo();
    document.getElementById("liContasAPagar").classList.add("active");
    this.router.navigate(["pagar"]);
  }
  obterSaldo(){
    this.atualizarLinkAtivo();
    document.getElementById("liSaldoMes").classList.add("active");
    this.router.navigate(["saldo"]);
  }
  private atualizarLinkAtivo(){
    document.getElementById("liContasAReceber").classList.remove("active");
    document.getElementById("liContasAPagar").classList.remove("active");
    document.getElementById("liSaldoMes").classList.remove("active");
  }
}
