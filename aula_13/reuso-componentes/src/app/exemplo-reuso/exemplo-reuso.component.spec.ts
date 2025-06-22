import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploReusoComponent } from './exemplo-reuso.component';

describe('ExemploReusoComponent', () => {
  let component: ExemploReusoComponent;
  let fixture: ComponentFixture<ExemploReusoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemploReusoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploReusoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
