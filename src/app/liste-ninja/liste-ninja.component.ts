import { Component, OnInit } from '@angular/core';
import { Ninja } from '../modeles/ninja';
import { NinjaService } from '../service/ninja.service';

@Component({
  selector: 'app-liste-ninja',
  templateUrl: './liste-ninja.component.html',
  styleUrls: ['./liste-ninja.component.scss']
})
export class ListeNinjaComponent implements OnInit {

  ninjas: Ninja[]

  constructor(
    private ninjaService: NinjaService
  ) { }

  ngOnInit() {
    this.ninjaService.getAll()
    .subscribe( ninjas => this.ninjas = ninjas)
  }

}
