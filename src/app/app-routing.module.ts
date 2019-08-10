import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContaPagarListarComponent } from './Conta/Pagar/conta-pagar-listar/conta-pagar-listar.component';
import { ContaReceberListarComponent } from './Conta/Receber/conta-receber-listar/conta-receber-listar.component';
import { SaldoListarComponent } from './Saldo/saldo-listar/saldo-listar.component';


const routes: Routes = [
  {path:"pagar",component:ContaPagarListarComponent},
  {path:"receber", component:ContaReceberListarComponent},
  {path:"saldo",component:SaldoListarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
