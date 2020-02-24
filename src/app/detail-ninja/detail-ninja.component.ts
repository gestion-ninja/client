import { Component, OnInit, Input } from '@angular/core';
import { Ninja } from '../modeles/ninja';

@Component({
  selector: 'app-detail-ninja',
  templateUrl: './detail-ninja.component.html',
  styleUrls: ['./detail-ninja.component.scss']
})
export class DetailNinjaComponent implements OnInit {

  @Input()
  mode: 'fiche' | 'complet'

  @Input()
  ninja: Ninja

  constructor() { }

  ngOnInit(): void {
  }

}
