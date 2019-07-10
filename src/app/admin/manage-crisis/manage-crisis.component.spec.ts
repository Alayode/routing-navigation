import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCrisisComponent } from './manage-crisis.component';

describe('ManageCrisisComponent', () => {
  let component: ManageCrisisComponent;
  let fixture: ComponentFixture<ManageCrisisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCrisisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCrisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
