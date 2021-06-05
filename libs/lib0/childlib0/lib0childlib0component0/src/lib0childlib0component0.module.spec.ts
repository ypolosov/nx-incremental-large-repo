import { TestBed, waitForAsync } from '@angular/core/testing';
import { Lib0childlib0component0ComponentModule } from './lib0childlib0component0.module';

describe('Lib0childlib0component0ComponentModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Lib0childlib0component0ComponentModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Lib0childlib0component0ComponentModule).toBeDefined();
  });
});
