import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexHomeHeaderSectionComponent } from './apex-home-header-section.component';

describe('ApexHomeHeaderSectionComponent', () => {
  let component: ApexHomeHeaderSectionComponent;
  let fixture: ComponentFixture<ApexHomeHeaderSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApexHomeHeaderSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexHomeHeaderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
