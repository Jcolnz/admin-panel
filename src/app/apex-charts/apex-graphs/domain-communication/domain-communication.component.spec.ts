import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainCommunicationComponent } from './domain-communication.component';

describe('DomainCommunicationComponent', () => {
  let component: DomainCommunicationComponent;
  let fixture: ComponentFixture<DomainCommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainCommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
