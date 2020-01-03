import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexBsnGraphComponent } from './apex-bsn-graph.component';

describe('ApexBsnGraphComponent', () => {
  let component: ApexBsnGraphComponent;
  let fixture: ComponentFixture<ApexBsnGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApexBsnGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexBsnGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
