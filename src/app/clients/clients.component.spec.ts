import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLIENTSComponent } from './clients.component';

describe('CLIENTSComponent', () => {
  let component: CLIENTSComponent;
  let fixture: ComponentFixture<CLIENTSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CLIENTSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CLIENTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
