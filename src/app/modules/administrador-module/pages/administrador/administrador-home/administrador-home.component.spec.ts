import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorHomeComponent } from './administrador-home.component';

describe('AdministradorComponent', () => {
  let component: AdministradorHomeComponent;
  let fixture: ComponentFixture<AdministradorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
