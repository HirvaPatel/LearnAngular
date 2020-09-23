import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetLangComponent } from './greet-lang.component';

describe('GreetLangComponent', () => {
  let component: GreetLangComponent;
  let fixture: ComponentFixture<GreetLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetLangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
