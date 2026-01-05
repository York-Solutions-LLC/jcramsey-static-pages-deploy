import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Test Calculator');
  });

  it('should correctly map addition', async () => {
    const operation = App.getOperation(0);
    const result = operation(4, 2);
    expect(result).toBe(6);
  });

  it('should correctly map subtraction', async () => {
    const operation = App.getOperation(1);
    const result = operation(4, 2);
    expect(result).toBe(2);
  });

  it('should correctly map multiplication', async () => {
    const operation = App.getOperation(2);
    const result = operation(4, 2);
    expect(result).toBe(8);
  });

  it('should correctly map division', async () => {
    const operation = App.getOperation(3);
    const result = operation(4, 2);
    expect(result).toBe(2);
  });

  it('should correctly handle divide-by-zero', async () => {
    const operation = App.getOperation(3);
    const result = operation(2, 0);
    expect(isNaN(result)).toBeTruthy();
  });

  it('should correctly map fallback to addition', async () => {
    const operation = App.getOperation(Number.POSITIVE_INFINITY);
    const result = operation(4, 2);
    expect(result).toBe(6);
  });
});
