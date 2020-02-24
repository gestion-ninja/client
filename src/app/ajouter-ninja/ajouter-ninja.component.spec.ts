import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterNinjaComponent } from './ajouter-ninja.component';

describe('AjouterNinjaComponent', () => {
  let component: AjouterNinjaComponent;
  let fixture: ComponentFixture<AjouterNinjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterNinjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterNinjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
