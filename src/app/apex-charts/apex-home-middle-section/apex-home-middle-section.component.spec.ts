import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexHomeMiddleSectionComponent } from './apex-home-middle-section.component';

describe('ApexHomeMiddleSectionComponent', () => {
  let component: ApexHomeMiddleSectionComponent;
  let fixture: ComponentFixture<ApexHomeMiddleSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApexHomeMiddleSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexHomeMiddleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
