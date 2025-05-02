import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OQueEComponent } from './o-que-e.component';

describe('OQueEComponent', () => {
  let component: OQueEComponent;
  let fixture: ComponentFixture<OQueEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OQueEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OQueEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
