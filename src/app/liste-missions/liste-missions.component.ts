import { Component, OnInit } from '@angular/core';
import { Mission } from '../modeles/mission';
import { MissionService } from '../service/mission.service';

@Component({
  selector: 'app-liste-missions',
  templateUrl: './liste-missions.component.html',
  styleUrls: ['./liste-missions.component.scss']
})
export class ListeMissionsComponent implements OnInit {

  missions: Mission[]

  constructor(
    private missionService: MissionService
  ) { }

  ngOnInit() {
    this.missionService.getAll()
    .subscribe( missions => this.missions = missions)
    .unsubscribe()
  }

}
