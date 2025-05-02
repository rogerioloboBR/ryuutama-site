import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanicasComponent } from './mecanicas.component';

describe('MecanicasComponent', () => {
  let component: MecanicasComponent;
  let fixture: ComponentFixture<MecanicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MecanicasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MecanicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
