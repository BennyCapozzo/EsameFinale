import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { tap } from 'rxjs';
import { Attivita } from '../models/attivita';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  list: Attivita[]  = []

  constructor(private http :HttpClient) { }

  fetchType(tipo: string, partecipanti: string, prezzo: number){
    const params = new HttpParams()
    .set("type",`${tipo}`)
    .set("partecipants", `${partecipanti}`)
    .set("price",`${prezzo}`)
    //return this.http.get(`http://www.boredapi.com/api/activity?type=${tipo}&$partecipants=${partecipanti}&price=${prezzo}`)
    return this.http.get("http://www.boredapi.com/api/activity?",{params})
    .pipe(
      tap(response => this.list.push(response as Attivita))
    )
  }

  getElement(key: string){
    const elemento = this.list.find(elem => elem.key == key)
    console.log(elemento)
    return elemento
  }
}
