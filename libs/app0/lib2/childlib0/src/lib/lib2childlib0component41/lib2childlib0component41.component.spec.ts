import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib0component41Component } from './lib2childlib0component41.component';

describe('Lib2childlib0component41Component', () => {
  let component: Lib2childlib0component41Component;
  let fixture: ComponentFixture<Lib2childlib0component41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib0component41Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib0component41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});