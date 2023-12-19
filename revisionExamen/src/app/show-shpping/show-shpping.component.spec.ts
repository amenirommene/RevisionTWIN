import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowShppingComponent } from './show-shpping.component';

describe('ShowShppingComponent', () => {
  let component: ShowShppingComponent;
  let fixture: ComponentFixture<ShowShppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowShppingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowShppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
