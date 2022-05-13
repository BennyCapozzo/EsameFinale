import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  tipo = new FormControl('')
  partecipanti = new FormControl('')
  prezzo = new FormControl('')

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  fetch(){
    this.http.fetchType(this.tipo.value, this.partecipanti.value, this.prezzo.value).subscribe()
  }
}
