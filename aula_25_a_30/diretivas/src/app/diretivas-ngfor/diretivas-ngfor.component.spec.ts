import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasNgforComponent } from './diretivas-ngfor.component';

describe('DiretivasNgforComponent', () => {
  let component: DiretivasNgforComponent;
  let fixture: ComponentFixture<DiretivasNgforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivasNgforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
