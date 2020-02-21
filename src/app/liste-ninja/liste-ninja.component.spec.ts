import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeNinjaComponent } from './liste-ninja.component';

describe('ListeNinjaComponent', () => {
  let component: ListeNinjaComponent;
  let fixture: ComponentFixture<ListeNinjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeNinjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeNinjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
