import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNurseComponent } from './manage-nurse.component';

describe('ManageNurseComponent', () => {
  let component: ManageNurseComponent;
  let fixture: ComponentFixture<ManageNurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageNurseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
