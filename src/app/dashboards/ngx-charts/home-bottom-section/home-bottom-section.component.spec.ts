import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBottomSectionComponent } from './home-bottom-section.component';

describe('HomeBottomSectionComponent', () => {
  let component: HomeBottomSectionComponent;
  let fixture: ComponentFixture<HomeBottomSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBottomSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBottomSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
