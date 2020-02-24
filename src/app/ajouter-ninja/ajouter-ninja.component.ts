import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ParametreService } from '../service/parametre.service';
import { RangNinja } from '../modeles/rang-ninja';
import { RangNinjaService } from '../service/rang-ninja.service';
import { AffiniteesService } from '../service/affinitees.service';
import { Affinitee } from '../modeles/affinitee';

@Component({
  selector: 'app-ajouter-ninja',
  templateUrl: './ajouter-ninja.component.html',
  styleUrls: ['./ajouter-ninja.component.scss']
})
export class AjouterNinjaComponent implements OnInit, OnChanges {

  formulaire: FormGroup
  rangs: RangNinja[]
  affinitees: Affinitee[]

  constructor(
    private fb: FormBuilder,
    private rangService: RangNinjaService,
    private affiniteesService: AffiniteesService,
  ) { }

  ngOnInit(): void {
    this.initialiserFormulaire();
    this.chargerRangs()
    this.chargerAffinitees()
  }

  ngOnChanges() {
    console.log(this.formulaire.value)
  }


  private initialiserFormulaire() {
    this.formulaire = this.fb.group({
      nom: [''],
      prenom: ['', Validators.required],
      rang: [''],
      affinitees: ['', Validators.required],
      techniques: this.fb.array([

      ])
    });
  }

  private chargerRangs() {
    this.rangService.getAll()
    .subscribe( rangs => this.rangs = rangs)
  }

  private chargerAffinitees() {
    this.affiniteesService.getAll()
    .subscribe( affinitees => this.affinitees = affinitees)
  }
}
