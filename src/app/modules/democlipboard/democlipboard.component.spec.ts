import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoclipboardComponent } from './democlipboard.component';

describe('DemoclipboardComponent', () => {
  let component: DemoclipboardComponent;
  let fixture: ComponentFixture<DemoclipboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoclipboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoclipboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
