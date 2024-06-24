import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMDBComponent } from './carousel-mdb.component';

describe('CarouselMDBComponent', () => {
  let component: CarouselMDBComponent;
  let fixture: ComponentFixture<CarouselMDBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselMDBComponent]
    });
    fixture = TestBed.createComponent(CarouselMDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
