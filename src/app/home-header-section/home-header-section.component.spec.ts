import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeaderSectionComponent } from './home-header-section.component';

describe('HomeHeaderSectionComponent', () => {
  let component: HomeHeaderSectionComponent;
  let fixture: ComponentFixture<HomeHeaderSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeHeaderSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHeaderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
