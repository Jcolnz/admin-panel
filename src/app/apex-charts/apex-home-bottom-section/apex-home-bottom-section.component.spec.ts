import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexHomeBottomSectionComponent } from './apex-home-bottom-section.component';

describe('ApexHomeBottomSectionComponent', () => {
  let component: ApexHomeBottomSectionComponent;
  let fixture: ComponentFixture<ApexHomeBottomSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApexHomeBottomSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexHomeBottomSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
