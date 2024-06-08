import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ocendata } from '../interfaces/ocendata';


@Injectable({
  providedIn: 'root'
})
export class OceanDataService {
  private apiUrl = 'https://fiap-3sis-gs-20241.azurewebsites.net/OceanData';

  constructor(private http: HttpClient) { }

  list(page: number, size: number, filters: any): Observable<Ocendata[]> {
    let params = new HttpParams()
      .set('pagina', page.toString())
      .set('qtde', size.toString());

    if (filters.regiao) {
      params = params.set('regiao', filters.regiao);
    }
    if (filters.especie) {
      params = params.set('especie', filters.especie);
    }
    if (filters.statusConservacao) {
      params = params.set('statusConservacao', filters.statusConservacao);
    }
    if (filters.temperaturaAgua) {
      params = params.set('temperaturaAgua', filters.temperaturaAgua);
    }
    if (filters.ph) {
      params = params.set('ph', filters.ph);
    }
    if (filters.nivelPoluicao) {
      params = params.set('nivelPoluicao', filters.nivelPoluicao);
    }

    console.log('Parâmetros da requisição:', params.toString());

    return this.http.get<Ocendata[]>(this.apiUrl, { params });
  }
}
