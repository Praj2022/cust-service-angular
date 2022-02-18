import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JOBSComponent } from './jobs.component';

describe('JOBSComponent', () => {
  let component: JOBSComponent;
  let fixture: ComponentFixture<JOBSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JOBSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JOBSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
