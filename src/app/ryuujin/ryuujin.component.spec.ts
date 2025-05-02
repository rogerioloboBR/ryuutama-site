import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RyuujinComponent } from './ryuujin.component';

describe('RyuujinComponent', () => {
  let component: RyuujinComponent;
  let fixture: ComponentFixture<RyuujinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RyuujinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RyuujinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
