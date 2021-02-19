import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCountryDetailComponent } from './edit-country-detail.component';

describe('EditCountryDetailComponent', () => {
  let component: EditCountryDetailComponent;
  let fixture: ComponentFixture<EditCountryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCountryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCountryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
