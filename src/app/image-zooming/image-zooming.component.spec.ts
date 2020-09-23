import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageZoomingComponent } from './image-zooming.component';

describe('ImageZoomingComponent', () => {
  let component: ImageZoomingComponent;
  let fixture: ComponentFixture<ImageZoomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageZoomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageZoomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
