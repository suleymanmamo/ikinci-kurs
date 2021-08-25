import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RoteComponent } from './rote.component';

describe('RoteComponent', () => {
  let component: RoteComponent;
  let fixture: ComponentFixture<RoteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
