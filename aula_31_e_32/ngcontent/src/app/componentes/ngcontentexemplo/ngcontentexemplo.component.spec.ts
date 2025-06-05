import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcontentexemploComponent } from './ngcontentexemplo.component';

describe('NgcontentexemploComponent', () => {
  let component: NgcontentexemploComponent;
  let fixture: ComponentFixture<NgcontentexemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgcontentexemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcontentexemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
