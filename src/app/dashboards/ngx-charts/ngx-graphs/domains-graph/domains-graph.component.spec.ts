import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainsGraphComponent } from './domains-graph.component';

describe('DomainsGraphComponent', () => {
  let component: DomainsGraphComponent;
  let fixture: ComponentFixture<DomainsGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainsGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
