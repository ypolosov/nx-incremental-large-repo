import { TestBed, waitForAsync } from '@angular/core/testing';
import { Lib0Module } from './module';

describe('Lib0Module', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Lib0Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Lib0Module).toBeDefined();
  });
});


// import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

// import { Lib0parentComponent } from './lib0parent.component';

// describe('Lib0parentComponent', () => {
//   let component: Lib0parentComponent;
//   let fixture: ComponentFixture<Lib0parentComponent>;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [Lib0parentComponent]
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(Lib0parentComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
