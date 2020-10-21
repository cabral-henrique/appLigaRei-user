import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  PesquisarCep(cep) {
    return this.http.get("https://viacep.com.br/ws/" + cep + "/json/");
  }

  pesquisaGeo(latitude, longitude) {
    return this.http.get(
      "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" +
      latitude +
      "&lon=" +
      longitude +
      ""
    );
  }
}
