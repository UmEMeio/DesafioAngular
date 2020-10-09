import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class DeputadoService {
  
 apiUrl ='https://dadosabertos.camara.leg.br/api/v2/deputados?siglaPartido=&dataInicio=2020-10-06&dataFim=2020-10-09&ordem=ASC&ordenarPor=nome';
 httpOpitions ={
   headers: new HttpHeaders({
     'Content-Type' : 'application/json'
   })
 };
  
  constructor(
    private httpCliente : HttpClient 
  ) { }

  public getUf() : Observable<ResponsePageable>{
    return this.httpCliente.get<ResponsePageable>(this.apiUrl)
  }

  public getDeputadosdaCamera(selectedUfId: string) :Observable<any> {
    let params1 = new HttpParams().set('siglaUf',selectedUfId);
    return this.httpCliente.get<ResponsePageable>(this.apiUrl,{params:params1})
  }

  public getPartidoParam(selectedPartidoId: string) :Observable<any> {
    let params1 = new HttpParams().set('siglaPartido',selectedPartidoId);
    return this.httpCliente.get<ResponsePageable>(this.apiUrl,{params:params1})
  }

  public getNomeParam(selectedNomeId: string) :Observable<any> {
    let params1 = new HttpParams().set('nome',selectedNomeId);
    return this.httpCliente.get<ResponsePageable>(this.apiUrl,{params:params1})
  }
}
