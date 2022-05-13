import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { tap } from 'rxjs';
import { Attivita } from '../models/attivita';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  list: Attivita[]  = []

  constructor(private http :HttpClient) { }

  fetchType(tipo: string, partecipanti: string, prezzo: number){
    return this.http.get(`http://www.boredapi.com/api/activity?type=${tipo}&${partecipanti}&${prezzo}`)
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
