import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadpgComponent } from './uploadpg.component';

describe('UploadpgComponent', () => {
  let component: UploadpgComponent;
  let fixture: ComponentFixture<UploadpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadpgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
