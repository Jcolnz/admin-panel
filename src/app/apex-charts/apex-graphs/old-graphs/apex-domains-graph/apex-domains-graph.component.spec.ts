import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexDomainsGraphComponent } from './apex-domains-graph.component';

describe('ApexDomainsGraphComponent', () => {
  let component: ApexDomainsGraphComponent;
  let fixture: ComponentFixture<ApexDomainsGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApexDomainsGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexDomainsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
