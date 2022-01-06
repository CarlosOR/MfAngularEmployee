import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfEmployeContentComponent } from './mf-employe-content.component';

describe('MfEmployeContentComponent', () => {
  let component: MfEmployeContentComponent;
  let fixture: ComponentFixture<MfEmployeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfEmployeContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfEmployeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
