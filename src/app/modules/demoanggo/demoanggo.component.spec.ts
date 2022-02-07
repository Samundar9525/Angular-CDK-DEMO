import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoanggoComponent } from './demoanggo.component';

describe('DemoanggoComponent', () => {
  let component: DemoanggoComponent;
  let fixture: ComponentFixture<DemoanggoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoanggoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoanggoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
