import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvsComponent } from './envs.component';

describe('EnvsComponent', () => {
  let component: EnvsComponent;
  let fixture: ComponentFixture<EnvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
