import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDragDropComponent } from './demo-drag-drop.component';

describe('DemoDragDropComponent', () => {
  let component: DemoDragDropComponent;
  let fixture: ComponentFixture<DemoDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoDragDropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
