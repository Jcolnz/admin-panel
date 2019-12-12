import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGroupedBarComponent } from './ngx-grouped-bar.component';

describe('GraphComponent', () => {
  let component: NgxGroupedBarComponent;
  let fixture: ComponentFixture<NgxGroupedBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxGroupedBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGroupedBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
