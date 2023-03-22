import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtainerFormComponent } from './obtainer-form.component';

describe('ObtainerFormComponent', () => {
  let component: ObtainerFormComponent;
  let fixture: ComponentFixture<ObtainerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObtainerFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObtainerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
