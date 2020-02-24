import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterMissionComponent } from './ajouter-mission.component';

describe('AjouterMissionComponent', () => {
  let component: AjouterMissionComponent;
  let fixture: ComponentFixture<AjouterMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
