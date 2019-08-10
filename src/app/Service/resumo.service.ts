import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resumo } from '../Model/Resumo';

@Injectable({
  providedIn: 'root'
})
export class ResumoService {

  url = 'http://localhost:8080/api';

  constructor(private http:HttpClient) { }

  public obterResumoMensal(mes,ano){
    return this.http.get<Resumo>(this.url+"/parcelas?vencimento="+mes+"-"+ano+"")
  }
}
