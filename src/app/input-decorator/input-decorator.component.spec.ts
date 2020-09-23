import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDecoratorComponent } from './input-decorator.component';

describe('InputDecoratorComponent', () => {
  let component: InputDecoratorComponent;
  let fixture: ComponentFixture<InputDecoratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDecoratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
