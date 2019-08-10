import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conta } from '../Model/Conta';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  url = 'http://localhost:8080/api';

  constructor(private http:HttpClient) { }

  public obterContasAPagar(){
    return this.http.get<Conta[]>(this.url+"/contas/pagar");
  }
  public obterContasAReceber(){
    return this.http.get<Conta[]>(this.url+"/contas/receber");
  }

  public pagarParcela(conta:Conta){
    return this.http.delete(this.url+"/parcelas/"+conta.parcelas[0].id);
  }

  public pagarConta(conta:Conta){
    return this.http.delete(this.url+"/contas/"+conta.id);
  }

  public receberPagamento(conta:Conta){
    return this.http.delete(this.url+"/contas/"+conta.id);
  }
  public receberParcelaPagamento(conta:Conta){
    return this.http.delete(this.url+"/parcelas/"+conta.parcelas[0].id);
  }

  public salvarConta(conta:Conta){
    return this.http.post<Conta>(this.url+"/contas",conta);
  }
  public editarConta(conta:Conta){
    return this.http.put<Conta>(this.url+"/contas/"+conta.id,conta);
  }
}
