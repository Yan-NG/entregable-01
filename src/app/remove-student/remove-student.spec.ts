import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveStudent } from './remove-student';

describe('RemoveStudent', () => {
  let component: RemoveStudent;
  let fixture: ComponentFixture<RemoveStudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveStudent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveStudent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
