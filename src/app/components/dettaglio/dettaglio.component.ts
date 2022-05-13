import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Attivita } from 'src/app/models/attivita';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent implements OnInit {
  element !: Attivita

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpService
  ) {}

  ngOnInit(): void {
    const key = this.activatedRoute.snapshot.paramMap.get('id');
    this.element = this.http.getElement(key!)!
    console.log(this.element)
  }

}
