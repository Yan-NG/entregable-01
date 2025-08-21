import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCollapsed } from './sidebar-collapsed';

describe('SidebarCollapsed', () => {
  let component: SidebarCollapsed;
  let fixture: ComponentFixture<SidebarCollapsed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarCollapsed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarCollapsed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
