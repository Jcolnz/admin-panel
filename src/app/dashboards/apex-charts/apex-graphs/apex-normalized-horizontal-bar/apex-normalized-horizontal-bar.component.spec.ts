import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexNormalizedHorizontalBarComponent } from './apex-normalized-horizontal-bar.component';

describe('ApexNormalizedHorizontalBarComponent', () => {
  let component: ApexNormalizedHorizontalBarComponent;
  let fixture: ComponentFixture<ApexNormalizedHorizontalBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApexNormalizedHorizontalBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexNormalizedHorizontalBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
