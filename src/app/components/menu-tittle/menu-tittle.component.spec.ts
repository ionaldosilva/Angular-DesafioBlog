import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTittleComponent } from './menu-tittle.component';

describe('MenuTittleComponent', () => {
  let component: MenuTittleComponent;
  let fixture: ComponentFixture<MenuTittleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuTittleComponent]
    });
    fixture = TestBed.createComponent(MenuTittleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
