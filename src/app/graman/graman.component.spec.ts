import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GramanComponent } from './graman.component';

describe('GramanComponent', () => {
  let component: GramanComponent;
  let fixture: ComponentFixture<GramanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GramanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GramanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
