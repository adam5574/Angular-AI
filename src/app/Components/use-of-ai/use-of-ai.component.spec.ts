import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseOfAiComponent } from './use-of-ai.component';

describe('UseOfAiComponent', () => {
  let component: UseOfAiComponent;
  let fixture: ComponentFixture<UseOfAiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseOfAiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseOfAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
