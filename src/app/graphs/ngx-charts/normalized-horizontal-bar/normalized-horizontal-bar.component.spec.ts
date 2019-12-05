import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalizedHorizontalBarComponent } from './normalized-horizontal-bar.component';

describe('NormalizedHorizontalBarComponent', () => {
  let component: NormalizedHorizontalBarComponent;
  let fixture: ComponentFixture<NormalizedHorizontalBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalizedHorizontalBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalizedHorizontalBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
