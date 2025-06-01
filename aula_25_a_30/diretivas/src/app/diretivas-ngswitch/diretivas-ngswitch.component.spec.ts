import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasNgswitchComponent } from './diretivas-ngswitch.component';

describe('DiretivasNgswitchComponent', () => {
  let component: DiretivasNgswitchComponent;
  let fixture: ComponentFixture<DiretivasNgswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivasNgswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasNgswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
