import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib5component39Component } from './lib0childlib5component39.component';

describe('Lib0childlib5component39Component', () => {
  let component: Lib0childlib5component39Component;
  let fixture: ComponentFixture<Lib0childlib5component39Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib5component39Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib5component39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});