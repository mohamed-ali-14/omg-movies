import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvdetailComponent } from './tvdetail.component';

describe('TvdetailComponent', () => {
  let component: TvdetailComponent;
  let fixture: ComponentFixture<TvdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
