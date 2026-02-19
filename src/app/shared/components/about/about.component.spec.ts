import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate age correctly', () => {
    const now = new Date();
    const birthYear = 1998;
    const birthMonth = 9; // October (0-indexed)
    const birthDay = 13;

    let expectedAge = now.getFullYear() - birthYear;

    // Adjust if birthday hasn't occurred this year
    if (now.getMonth() < birthMonth ||
        (now.getMonth() === birthMonth && now.getDate() < birthDay)) {
      expectedAge--;
    }

    expect(component['age']).toBe(expectedAge);
  });

  it('should have age greater than 20 years', () => {
    expect(component['age']).toBeGreaterThan(20);
  });

  it('should open Portuguese resume', () => {
    const spy = jest.spyOn(window, 'open').mockImplementation(() => null);

    component['viewResumePT']();

    expect(spy).toHaveBeenCalledWith(
      'https://www.canva.com/design/DAGNTsZF9ZA/SlHnN155fRL0kkNLUhE2Xw/view',
      '_blank'
    );
    spy.mockRestore();
  });

  it('should calculate age based on birth date 10/13/1998', () => {
    // Testing with different dates to verify calculation
    const today = new Date();
    const birthDate = new Date('1998-10-13');

    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const currentMonth = today.getMonth();
    const birthMonth = birthDate.getMonth();

    if (currentMonth < birthMonth ||
        (currentMonth === birthMonth && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }

    expect(component['age']).toBe(calculatedAge);
  });

  it('should decrement age when birthday hasn\\'t occurred yet this year', () => {
    // Mock a date before birthday (January 1st)
    const originalDate = Date;
    const mockDate = jest.fn().mockImplementation((dateString?: string) => {
      if (dateString) {
        return new originalDate(dateString);
      }
      return new originalDate('2024-01-01');
    });

    Object.setPrototypeOf(mockDate, originalDate);
    Object.defineProperty(mockDate, 'prototype', {
      value: originalDate.prototype,
      writable: false
    });

    global.Date = mockDate as any;

    // Create new component with mocked date
    const testComponent = new SobreComponent();

    // Age should be 25 (2024 - 1998 - 1)
    expect(testComponent['age']).toBe(25);

    // Restore original Date
    global.Date = originalDate;
  });

  it('should not decrement age when birthday has already occurred this year', () => {
    // Mock a date after birthday (October 15th)
    const originalDate = Date;
    const mockDate = jest.fn().mockImplementation((dateString?: string) => {
      if (dateString) {
        return new originalDate(dateString);
      }
      return new originalDate('2024-10-15');
    });

    Object.setPrototypeOf(mockDate, originalDate);
    Object.defineProperty(mockDate, 'prototype', {
      value: originalDate.prototype,
      writable: false
    });

    global.Date = mockDate as any;

    // Create new component with mocked date
    const testComponent = new SobreComponent();

    // Age should be 26 (2024 - 1998)
    expect(testComponent['age']).toBe(26);

    // Restore original Date
    global.Date = originalDate;
  });
});
