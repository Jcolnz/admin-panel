import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMessagesSecurelyComponent } from './send-messages-securely.component';

describe('SendMessagesSecurelyComponent', () => {
  let component: SendMessagesSecurelyComponent;
  let fixture: ComponentFixture<SendMessagesSecurelyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendMessagesSecurelyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMessagesSecurelyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
