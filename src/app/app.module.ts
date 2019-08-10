import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContaService } from './Service/conta.service';
import { HttpClientModule } from '@angular/common/http';
import { ContaPagarListarComponent } from './Conta/Pagar/conta-pagar-listar/conta-pagar-listar.component';
import { ContaReceberListarComponent } from './Conta/Receber/conta-receber-listar/conta-receber-listar.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SaldoListarComponent } from './Saldo/saldo-listar/saldo-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContaPagarListarComponent,
    ContaReceberListarComponent,
    SaldoListarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ContaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
