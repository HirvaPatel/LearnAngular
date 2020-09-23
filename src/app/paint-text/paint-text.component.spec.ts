import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintTextComponent } from './paint-text.component';

describe('PaintTextComponent', () => {
  let component: PaintTextComponent;
  let fixture: ComponentFixture<PaintTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
