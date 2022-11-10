import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopledetailComponent } from './peopledetail.component';

describe('PeopledetailComponent', () => {
  let component: PeopledetailComponent;
  let fixture: ComponentFixture<PeopledetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopledetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopledetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
