import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexGroupedBarComponent } from './apex-grouped-bar.component';

describe('GroupedBarComponent', () => {
  let component: ApexGroupedBarComponent;
  let fixture: ComponentFixture<ApexGroupedBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApexGroupedBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexGroupedBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
