import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with skills list', () => {
    expect(component['skills']).toBeDefined();
    expect(component['skills'].length).toBe(6);
  });

  it('should have skills with required properties', () => {
    const skill = component['skills'][0];
    expect(skill.title).toBeDefined();
    expect(skill.icon).toBeDefined();
    expect(skill.items).toBeDefined();
    expect(Array.isArray(skill.items)).toBe(true);
  });
});
