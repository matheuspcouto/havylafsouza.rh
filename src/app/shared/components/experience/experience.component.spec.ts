import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceComponent } from './experience.component';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with jobs list', () => {
    expect(component['jobs']).toBeDefined();
    expect(component['jobs'].length).toBeGreaterThan(0);
  });

  it('should have tabs defined', () => {
    expect(component['tabs']).toBeDefined();
    expect(component['tabs'].length).toBe(2);
    expect(component['tabs'][0].titulo).toBe('Profissional');
    expect(component['tabs'][1].titulo).toBe('Acadêmica');
  });

  it('should have first tab selected by default', () => {
    expect(component['selectedTab']).toBeDefined();
    expect(component['selectedTab']?.id).toBe('experiencia-profissional');
  });

  it('should have jobs with required properties', () => {
    const job = component['jobs'][0];
    expect(job.title).toBeDefined();
    expect(job.period).toBeDefined();
    expect(job.company).toBeDefined();
    expect(job.activities).toBeDefined();
    expect(Array.isArray(job.activities)).toBe(true);
  });
});
