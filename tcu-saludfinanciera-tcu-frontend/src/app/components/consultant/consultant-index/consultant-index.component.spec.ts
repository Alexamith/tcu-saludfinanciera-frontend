import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantIndexComponent } from './consultant-index.component';

describe('ConsultantIndexComponent', () => {
  let component: ConsultantIndexComponent;
  let fixture: ComponentFixture<ConsultantIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultantIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultantIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
