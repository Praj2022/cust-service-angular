import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMPLOYERSComponent } from './employers.component';

describe('EMPLOYERSComponent', () => {
  let component: EMPLOYERSComponent;
  let fixture: ComponentFixture<EMPLOYERSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMPLOYERSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EMPLOYERSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
