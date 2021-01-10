import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerOfAiComponent } from './danger-of-ai.component';

describe('DangerOfAiComponent', () => {
  let component: DangerOfAiComponent;
  let fixture: ComponentFixture<DangerOfAiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangerOfAiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangerOfAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
