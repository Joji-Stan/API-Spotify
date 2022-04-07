import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParolesComponent } from './paroles.component';

describe('ParolesComponent', () => {
  let component: ParolesComponent;
  let fixture: ComponentFixture<ParolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
