import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceProfileDataComponent } from './finance-profile-data.component';

describe('FinanceProfileDataComponent', () => {
  let component: FinanceProfileDataComponent;
  let fixture: ComponentFixture<FinanceProfileDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceProfileDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceProfileDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
