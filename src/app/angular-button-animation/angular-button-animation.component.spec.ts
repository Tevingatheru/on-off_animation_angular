import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularButtonAnimationComponent } from './angular-button-animation.component';

describe('AngularButtonAnimationComponent', () => {
  let component: AngularButtonAnimationComponent;
  let fixture: ComponentFixture<AngularButtonAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularButtonAnimationComponent]
    });
    fixture = TestBed.createComponent(AngularButtonAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
