import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailNinjaComponent } from './detail-ninja.component';

describe('DetailNinjaComponent', () => {
  let component: DetailNinjaComponent;
  let fixture: ComponentFixture<DetailNinjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailNinjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailNinjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
